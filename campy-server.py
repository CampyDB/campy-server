from flask import Flask
from app.api import api_bp
from flask_cors import CORS, cross_origin
import app as ad

app = ad.create_app()
CORS(app)


@app.route('/')
def hello_world():
    return 'Hello World!'

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000,debug=True)