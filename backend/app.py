from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow all origins

@app.route("/api/tasks", methods=["GET","POST","DELETE"])
def tasks():
    # placeholder task logic
    return {"tasks": []}

@app.route("/api/ping")
def ping():
    return {"message": "pong"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
