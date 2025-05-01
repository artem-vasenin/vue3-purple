from http.server import BaseHTTPRequestHandler, HTTPServer
import sqlite3
import json

class SimpleAPIHandler(BaseHTTPRequestHandler):
    def _set_headers(self, status=200):
        self.send_response(status)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', 'http://localhost:5173')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Access-Control-Allow-Credentials', 'true')  # если нужно
        self.end_headers()

    def do_OPTIONS(self):
        self._set_headers(200)  # preflight ответ без тела

    def do_GET(self):
        if self.path == '/category':
            try:
                with sqlite3.connect('./bookmarks.db') as conn:
                    cursor = conn.cursor()
                    cursor.execute('SELECT id, name, alias FROM categories')
                    rows = cursor.fetchall()
                    categories = [
                        {'id': row[0], 'name': row[1], 'alias': row[2]}
                        for row in rows
                    ]
                response = json.dumps(categories).encode('utf-8')
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Content-Length', str(len(response)))
                self.end_headers()
                self.wfile.write(response)
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'text/plain')
                self.end_headers()
                self.wfile.write(str(e).encode('utf-8'))
        elif self.path == '/bookmark':
            self._set_headers()
            self.wfile.write(json.dumps({'message': 'BOOKMARKS!'}).encode())
        elif self.path == '/profile':
            self._set_headers()
            self.wfile.write(json.dumps({
                'name': 'Артём',
                'avatar': 'https://sun9-29.userapi.com/impg/nPsVS8z3krnv9BkbwvW_NPE5vhq3GZs7yZ_l6Q/127gN7OQ51s.jpg?size=586x587&quality=95&sign=ff289387375387681e3a34ff30a0ee7e&type=album',
            }).encode())
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({'error': 'Not found'}).encode())

    def do_POST(self):
        if self.path == '/category':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                data = json.loads(post_data.decode('utf-8'))
                name = data['name']
                alias = data['alias']
            except (json.JSONDecodeError, KeyError):
                self.send_response(400)
                self.end_headers()
                self.wfile.write(b'Invalid JSON or missing fields')
                return

            try:
                with sqlite3.connect('./bookmarks.db') as conn:
                    cursor = conn.cursor()
                    cursor.execute('INSERT INTO categories (name, alias) VALUES (?, ?)', (name, alias))
                    conn.commit()
                self.send_response(201)
                self.end_headers()
                self.wfile.write(b'Category added')
            except sqlite3.Error as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(f'Database error: {e}'.encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'Not found')

def run(server_class=HTTPServer, handler_class=SimpleAPIHandler, port=3000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Serving on http://localhost:{port}')
    httpd.serve_forever()

if __name__ == '__main__':
    run()