# 💀 Cryptex Terminal

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Flask](https://img.shields.io/badge/Backend-Flask-black?logo=flask)
![Python](https://img.shields.io/badge/Language-Python-blue?logo=python)
![Status](https://img.shields.io/badge/Status-Working%20Prototype-brightgreen)

> ✨ A real-time encryption-decryption app with a dark-themed UI.  
> Built using **React + Flask + Fernet Encryption**, this app auto-generates a `secret.key` to ensure secure and consistent cryptographic operations.

---

## 🔐 Features

- ⚡ **Live Encryption Preview** – Realtime character-by-character encryption
- 🌑 **Dark Terminal-Themed UI** – Aesthetic, sleek and responsive
- 🔒 **Encrypt + Decrypt Zones** – Each with copy-to-clipboard functionality
- 🔑 **Auto-Generated Key** – `secret.key` is created and reused securely
- 🔁 **One-click Copy Buttons** – For quick access to encrypted/decrypted output
- 🧠 **Built With Learning in Mind** – Great for exploring basic cryptography

---

## 🧠 Tech Stack

| Layer       | Tools                      |
|-------------|----------------------------|
| Frontend    | React, JavaScript, TailwindCSS (optional) |
| Backend     | Flask, Flask-CORS          |
| Encryption  | Python `cryptography.fernet` |
| Extras      | Axios, Markdown styling, Copy-to-clipboard API |


### ⚛️ Frontend (React + Vite)
```bash
cd cryptex-frontend
npm install
npm run dev
```


### 🐍 Backend (Flask + Python)
```bash
cd cryptex-backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
##### 📌 On first run, a secret.key file is automatically created in Config (cryptex-backend/Config) and used for all encryption/decryption operations.

#### 📦 `requirements.txt` (inside `/cryptex-backend` folder)

```txt
flask
flask-cors
cryptography
```
---

## Future Plans
- Multi-user login + encryption key assignment
- Encryption history log
- More encryption algorithms: AES, RSA, etc.
- Export encrypted data to .txt or .json
---

### Created by OHMIC GUY
#### LinkedIn- https://www.linkedin.com/in/ohmicguy/
