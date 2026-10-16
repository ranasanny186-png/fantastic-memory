"""Generate a self-contained HTML document without third-party dependencies."""
from pathlib import Path
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--output', default='/tmp/知序-经济学学习室-七章完整版.html')
args = parser.parse_args()
root = Path(__file__).resolve().parent
html = (root / 'index.html').read_text(encoding='utf-8')
html = html.replace('<link rel="stylesheet" href="style.css">', '<style>\n' + (root / 'style.css').read_text(encoding='utf-8') + '\n</style>')
for name in ('content', 'app'):
    code = (root / (name + '.js')).read_text(encoding='utf-8')
    html = html.replace(f'<script src="{name}.js"></script>', '<script>\n' + code.replace('</script', '<\\/script') + '\n</script>')
output = Path(args.output)
output.write_text(html, encoding='utf-8')
print(f'Generated: {output} ({output.stat().st_size} bytes)')
