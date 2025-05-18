import { useState } from "react";
import axios from "axios";
import OutputBox from "./components/OutputBox";
import "./App.css";


function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function App() {
  const [input, setInput] = useState("");
  const [encrypted, setEncrypted] = useState("");
  const [decrypted, setDecrypted] = useState("");


  const encryptMessageLive = debounce(async (text) => {
    if (text.trim() === "") {
      setEncrypted("");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/encrypt", {
        message: text,
      });
      setEncrypted(res.data.encrypted);
    } catch (err) {
      console.error("Live encryption failed:", err);
    }
  }, 300);

  const decryptMessageLive = debounce(async (text) => {
    if (text.trim() === "") {
      setDecrypted("");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/decrypt", {
        message: text,
      });
      setDecrypted(res.data.decrypted);
    } catch (err) {
      console.error("Live decryption failed:", err);
    }
  }, 300);

  const encryptMessage = async () => {
    try {
      const res = await axios.post("http://localhost:5000/encrypt", {
        message: input,
      });
      setEncrypted(res.data.encrypted);
    } catch (err) {
      console.error(err);
      alert("Encryption failed.");
    }
  };

  const decryptMessage = async () => {
    try {
      const res = await axios.post("http://localhost:5000/decrypt", {
        message: input,
      });
      setDecrypted(res.data.decrypted);
    } catch (err) {
      console.error(err);
      alert("Decryption failed.");
    }
  };

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setInput(newText);
    encryptMessageLive(newText);
    decryptMessageLive(newText);
  };

  return (
    <div className="container">
      <h1>💀 Cryptex Terminal</h1>
      <textarea
        placeholder="Type your secret message here..."
        value={input}
        onChange={handleInputChange}
        className="input-area"
      />
      <div className="button-group">
        <button onClick={encryptMessage}>Encrypt</button>
        <button onClick={decryptMessage}>Decrypt</button>
      </div>

      <OutputBox title="🔒 Encrypted" content={encrypted} />
      <OutputBox title="🔓 Decrypted" content={decrypted} />
    </div>
  );
}

export default App;
