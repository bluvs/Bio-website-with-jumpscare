import re

def build():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    with open('style.css', 'r', encoding='utf-8') as f:
        css = f.read()

    with open('script.js', 'r', encoding='utf-8') as f:
        js = f.read()

    # Replace <link rel="stylesheet" href="style.css"> with <style>...</style>
    html = re.sub(r'<link\s+rel="stylesheet"\s+href="style\.css"[^>]*>', f'<style>\n{css}\n</style>', html)

    # Replace <script src="script.js"></script> with <script>...</script>
    html = re.sub(r'<script\s+src="script\.js"[^>]*><\/script>', f'<script>\n{js}\n</script>', html)

    with open('index_bundled.html', 'w', encoding='utf-8') as f:
        f.write(html)

    print("Bundled into index_bundled.html")

if __name__ == '__main__':
    build()
