import React, { useState, useEffect } from "react";
import "./toast.css";

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    window.showToast = (message, type = "react") => {
      setToasts((prev) => [...prev, { message, type }]);
      setTimeout(() => {
        setToasts((prev) => prev.slice(1));
      }, 3000);
    };
  }, []);

  return (
    <div className="toast-container">
      {toasts.map((toast, idx) => (
        <div key={idx} className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      ))}
    </div>
  );
};

export default Toast;
