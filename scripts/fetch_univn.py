import urllib.request
import json
import ssl
import re
import os
import sys

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def fetch(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, context=ctx, timeout=12) as r:
            return json.loads(r.read().decode('utf-8'))
    except Exception as e:
        print(f'Error fetching {url}: {e}', file=sys.stderr)
        return None

def strip_tags(html):
    if not html:
        return ''
    clean = re.sub(r'<[^>]+>', ' ', html)
    clean = re.sub(r'\s+', ' ', clean).strip()
    return clean

print('Fetching collections...')
collections = fetch('https://univn.vn/wp-json/wp/v2/collections?per_page=100') or []

print('Fetching pages...')
pages = fetch('https://univn.vn/wp-json/wp/v2/pages?per_page=100') or []

print('Fetching sample themes...')
themes = fetch('https://univn.vn/wp-json/wp/v2/giao-dien?per_page=60') or []

print('Fetching sample posts...')
posts = fetch('https://univn.vn/wp-json/wp/v2/posts?per_page=40') or []

print('Fetching clients...')
clients = fetch('https://univn.vn/wp-json/wp/v2/khach-hang?per_page=50') or []

output_data = {
    'collections': [{'id': c['id'], 'slug': c['slug'], 'name': c['name'], 'count': c['count']} for c in collections],
    'pages': [
        {
            'id': p['id'],
            'slug': p['slug'],
            'title': p['title']['rendered'],
            'excerpt': strip_tags(p.get('excerpt', {}).get('rendered', '')),
            'content': p.get('content', {}).get('rendered', ''),
            'link': p['link']
        }
        for p in pages
    ],
    'themes': [
        {
            'id': t['id'],
            'slug': t['slug'],
            'title': t['title']['rendered'],
            'collections': t.get('collections', []),
            'featured_media': t.get('featured_media', 0),
            'link': t['link'],
            'content': t.get('content', {}).get('rendered', ''),
            'excerpt': strip_tags(t.get('excerpt', {}).get('rendered', ''))
        }
        for t in themes
    ],
    'posts': [
        {
            'id': po['id'],
            'slug': po['slug'],
            'title': po['title']['rendered'],
            'categories': po.get('categories', []),
            'date': po.get('date', ''),
            'link': po['link'],
            'excerpt': strip_tags(po.get('excerpt', {}).get('rendered', '')),
            'content': po.get('content', {}).get('rendered', '')
        }
        for po in posts
    ],
    'clients': [
        {
            'id': cl['id'],
            'slug': cl['slug'],
            'title': cl['title']['rendered'],
            'content': cl.get('content', {}).get('rendered', '')
        }
        for cl in clients
    ]
}

os.makedirs('src/data', exist_ok=True)
with open('src/data/univn_scraped.json', 'w', encoding='utf-8') as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print('Successfully saved src/data/univn_scraped.json!')
