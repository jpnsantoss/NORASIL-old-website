import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

const Notification = ({ message, type, timeout = 3000 }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout]);

  const handleDismiss = () => {
    setShow(false);
  };

  if (!show) {
    return null;
  }

  return (
    <div
      className={`notification notification--${type}`}
      onClick={handleDismiss}
    >
      {type === "success" ? (
        <FaCheckCircle className="notification__icon" />
      ) : (
        <FaExclamationCircle className="notification__icon" />
      )}
      {message}
      <button className="notification__close-btn" onClick={handleDismiss}>
        <FaTimes />
      </button>
    </div>
  );
};

export default Notification;
