from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route("/api/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    num1 = data.get("num1")
    num2 = data.get("num2")
    operation = data.get("operation")

    if num1 is None or num2 is None or operation not in ["add", "sub"]:
        return jsonify({"error": "Invalid input"}), 400

    if operation == "add":
        result = num1 + num2
    else:
        result = num1 - num2

    return jsonify({"num1": num1, "num2": num2, "operation": operation, "result": result})

@app.route("/api/ping")
def ping():
    return {"message": "pong"}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))   # 👈 use Azure-assigned port
    app.run(host="0.0.0.0", port=port)
