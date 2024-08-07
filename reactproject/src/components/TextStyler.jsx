import React, { useState } from "react";

function TextStyler({ onApplyStyle }) {
  const [fontSize, setFontSize] = useState("20px");
  const [fontColor, setFontColor] = useState("white");

  const handleApplyStyle = () => {
    onApplyStyle({ fontSize, fontColor });
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <label htmlFor="size">Font size:</label>
      <select
        name="size"
        id="size"
        value={fontSize}
        onChange={(event) => setFontSize(event.target.value)}
      >
        <option value="24px">10</option>
        <option value="28px">12</option>
        <option value="32px">14</option>
        <option value="40px">16</option>
      </select>
      <label htmlFor="color">Color:</label>
      <select
        name="color"
        id="color"
        value={fontColor}
        onChange={(event) => setFontColor(event.target.value)}
      >
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
      </select>
      <button onClick={handleApplyStyle}>Apply Style</button>
    </div>
  );
}

export default TextStyler;
