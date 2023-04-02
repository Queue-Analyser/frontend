from flask import Flask
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route('/getCurrentValue')
def generate():
    result = random.randint(1, 16)
    return str(result)

if __name__ == '__main__':
    app.run()
