from flask import Flask, request, jsonify
from flask_cors import CORS
from cryptography.fernet import Fernet
import os

app = Flask(__name__)
CORS(app)

KEY_FILE = "config/secret.key"

if os.path.exists(KEY_FILE):
    with open(KEY_FILE, "rb") as f:
        key = f.read()
else:
    key = Fernet.generate_key()
    with open(KEY_FILE, "wb") as f:
        f.write(key)

def load_or_create_key():
    if os.path.exists(KEY_FILE):
        with open(KEY_FILE, "rb") as f:
            return f.read()
    else:
        key = Fernet.generate_key()
        with open(KEY_FILE, "wb") as f:
            f.write(key)
        return key


key = load_or_create_key()
cipher = Fernet(key)


@app.route("/encrypt", methods=["POST"])
def encrypt():
    data = request.get_json()
    message = data.get("message", "")
    encrypted = cipher.encrypt(message.encode()).decode()
    return jsonify({"encrypted": encrypted})

@app.route("/decrypt", methods=["POST"])
def decrypt():
    data = request.get_json()
    encrypted = data.get("message", "").encode()
    try:
        decrypted = cipher.decrypt(encrypted).decode()
        return jsonify({"decrypted": decrypted})
    except Exception as e:
        return jsonify({"error": "Decryption failed."}), 400

if __name__ == "__main__":
    app.run(debug=True)
