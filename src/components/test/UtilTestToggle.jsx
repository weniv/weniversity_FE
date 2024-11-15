import React, { useState } from "react";
import UtilTest from "./UtilTest";

const buttonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  zIndex: 1000,
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
};

const contentStyle = {
  position: "fixed",
  bottom: "80px",
  right: "20px",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  zIndex: 1000,
};

export default function UtilTestToggle() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button
        onClick={toggleVisibility}
        style={{
          ...buttonStyle,
          backgroundColor: isVisible ? "#e74c3c" : "#333",
        }}
      >
        {isVisible ? "Util Test 닫기" : "Util Test 열기"}
      </button>

      {isVisible && (
        <div style={contentStyle}>
          <UtilTest />
        </div>
      )}
    </>
  );
}
