import { useState } from "react";

function OutputBox({ title, content }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="output-box">
      <div className="output-header">
        <span>{title}</span>
        <button onClick={handleCopy}>{copied ? "Copied!" : "📋 Copy"}</button>
      </div>
      <pre className="output-content">{content || "Nothing yet..."}</pre>
    </div>
  );
}

export default OutputBox;
