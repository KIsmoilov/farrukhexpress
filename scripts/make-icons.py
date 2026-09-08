"""Build a transparent circular favicon (and an Apple touch icon) from the badge.

The supplied artwork sits on a solid white square with no alpha, which shows as
a white box in the browser tab. Pure stdlib: no Pillow on this machine.
"""
import math, struct, zlib, pathlib

SRC = pathlib.Path('public/logo.png')


def decode_png(path):
    d = path.read_bytes()
    pos, idat = 8, b''
    w = h = ct = None
    while pos < len(d):
        ln = struct.unpack('>I', d[pos:pos + 4])[0]
        typ = d[pos + 4:pos + 8]
        data = d[pos + 8:pos + 8 + ln]
        if typ == b'IHDR':
            w, h, _bd, ct = struct.unpack('>IIBB', data[:10])
        elif typ == b'IDAT':
            idat += data
        pos += 12 + ln
    raw = zlib.decompress(idat)
    ch = {0: 1, 2: 3, 3: 1, 4: 2, 6: 4}[ct]
    stride = w * ch
    prev = bytearray(stride)
    rows, i = [], 0
    for _ in range(h):
        f = raw[i]; i += 1
        line = bytearray(raw[i:i + stride]); i += stride
        for x in range(stride):
            a = line[x - ch] if x >= ch else 0
            b = prev[x]
            c = prev[x - ch] if x >= ch else 0
            if f == 1: line[x] = (line[x] + a) & 255
            elif f == 2: line[x] = (line[x] + b) & 255
            elif f == 3: line[x] = (line[x] + (a + b) // 2) & 255
            elif f == 4:
                p = a + b - c
                pa, pb, pc = abs(p - a), abs(p - b), abs(p - c)
                pr = a if (pa <= pb and pa <= pc) else (b if pb <= pc else c)
                line[x] = (line[x] + pr) & 255
        rows.append(bytes(line)); prev = line
    return w, h, ch, rows


def encode_png(path, w, h, rgba):
    raw = b''.join(b'\x00' + bytes(rgba[y]) for y in range(h))
    def chunk(t, data):
        c = t + data
        return struct.pack('>I', len(data)) + c + struct.pack('>I', zlib.crc32(c) & 0xffffffff)
    path.write_bytes(
        b'\x89PNG\r\n\x1a\n'
        + chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 6, 0, 0, 0))
        + chunk(b'IDAT', zlib.compress(raw, 9))
        + chunk(b'IEND', b''))


def sample(rows, ch, w, h, fx, fy):
    """Bilinear sample of the source at float coords."""
    fx = min(max(fx, 0), w - 1); fy = min(max(fy, 0), h - 1)
    x0, y0 = int(fx), int(fy)
    x1, y1 = min(x0 + 1, w - 1), min(y0 + 1, h - 1)
    tx, ty = fx - x0, fy - y0
    out = []
    for c in range(3):
        p00 = rows[y0][x0 * ch + c]; p10 = rows[y0][x1 * ch + c]
        p01 = rows[y1][x0 * ch + c]; p11 = rows[y1][x1 * ch + c]
        top = p00 + (p10 - p00) * tx
        bot = p01 + (p11 - p01) * tx
        out.append(int(top + (bot - top) * ty + 0.5))
    return out


def build(size, background=None):
    """Render the badge into `size`x`size`.

    background=None -> transparent outside the circle (favicon)
    background=(r,g,b) -> filled outside the circle (Apple touch icon)
    """
    w, h, ch, rows = decode_png(SRC)
    # Badge extents measured from the source: it is inscribed with a 1-3px margin.
    cx, cy, r = (w - 1) / 2, (h - 1) / 2, min(w, h) / 2 - 1.5
    scale = (min(w, h) / 2) / r  # zoom slightly so the badge fills the circle
    out = []
    SS = 3  # supersample the edge for a smooth circle
    for y in range(size):
        row = bytearray()
        for x in range(size):
            cover = 0
            for sy in range(SS):
                for sx in range(SS):
                    px = (x + (sx + 0.5) / SS) / size * 2 - 1
                    py = (y + (sy + 0.5) / SS) / size * 2 - 1
                    if px * px + py * py <= 1.0:
                        cover += 1
            alpha = int(255 * cover / (SS * SS))
            nx = ((x + 0.5) / size * 2 - 1) / scale
            ny = ((y + 0.5) / size * 2 - 1) / scale
            rgb = sample(rows, ch, w, h, cx + nx * (min(w, h) / 2), cy + ny * (min(w, h) / 2))
            if background is not None:
                a = alpha / 255
                rgb = [int(rgb[c] * a + background[c] * (1 - a) + 0.5) for c in range(3)]
                alpha = 255
            row += bytes(rgb + [alpha])
        out.append(row)
    return out


pathlib.Path('public').mkdir(exist_ok=True)
encode_png(pathlib.Path('public/favicon.png'), 180, 180, build(180))
encode_png(pathlib.Path('public/apple-touch-icon.png'), 180, 180, build(180, background=(8, 8, 10)))
print('wrote favicon.png and apple-touch-icon.png')
