"""Generate a self-contained HTML document without third-party dependencies."""
from pathlib import Path
import argparse
import re

parser = argparse.ArgumentParser()
parser.add_argument('--output', default='/tmp/知序-经济学学习室-学习与模考版.html')
args = parser.parse_args()
root = Path(__file__).resolve().parent
html = (root / 'index.html').read_text(encoding='utf-8')
style = '<style>\n' + (root / 'style.css').read_text(encoding='utf-8') + '\n</style>'
html = re.sub(r'<link rel="stylesheet" href="style\.css(?:\?[^\"]*)?">', lambda _: style, html)
for name in ('content', 'additions', 'app', 'practice', 'exam'):
    code = (root / (name + '.js')).read_text(encoding='utf-8')
    replacement = '<script>\n' + code.replace('</script', '<\\/script') + '\n</script>'
    html = re.sub(r'<script src="' + name + r'\.js(?:\?[^\"]*)?"></script>', lambda _: replacement, html)
output = Path(args.output)
output.write_text(html, encoding='utf-8')
print(f'Generated: {output} ({output.stat().st_size} bytes)')
