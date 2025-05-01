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
        if self.path == '/categories':
            self._set_headers()
            self.wfile.write(json.dumps({'message': 'CATEGORIES!'}).encode())
        elif self.path == '/bookmarks':
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
        if self.path in ['/categories', '/bookmarks']:
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            try:
                data = json.loads(body)
            except json.JSONDecodeError:
                self._set_headers(400)
                self.wfile.write(json.dumps({'error': 'Invalid JSON'}).encode())
                return

            self._set_headers()
            self.wfile.write(json.dumps({'you_sent': data}).encode())
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({'error': 'Not found'}).encode())

def run(server_class=HTTPServer, handler_class=SimpleAPIHandler, port=3000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Serving on http://localhost:{port}')
    httpd.serve_forever()

if __name__ == '__main__':
    run()