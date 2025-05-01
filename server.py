from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import sqlite3

class SimpleAPIHandler(BaseHTTPRequestHandler):
    def _set_headers(self, status=200):
        self.send_response(status)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

    def do_GET(self):
        if self.path == '/categories':
            self._set_headers()
            self.wfile.write(json.dumps({'message': 'CATEGORIES!'}).encode())
        elif self.path == '/bookmarks':
            self._set_headers()
            self.wfile.write(json.dumps({'message': 'BOOKMARKS!'}).encode())
        elif self.path == '/profile':
            self._set_headers()
            self.wfile.write(json.dumps({'message': 'PROFILE!'}).encode())
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({'error': 'Not found'}).encode())

    def do_POST(self):
        if self.path == '/categories':
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
        elif self.path == '/bookmarks':
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
