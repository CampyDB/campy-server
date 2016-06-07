from flask import Flask
from app.api import api_bp
print ("ET")
app = Flask(__name__)
app.register_blueprint(api_bp)

@app.route('/')
def hello_world():
    return 'Hello World!'
print("REG")

if __name__ == '__main__':
    app.run()
