import React from "react";

function TextStyler({ fontSize, setFontSIze, fontColor, setfontColor }) {
  return (
    <div className="select" style={{ gap: "15px" }}>
      <label htmlFor="size">Font size:</label>
      <select
        name="size"
        id="size"
        value={fontSize}
        onChange={(event) => {
          setFontSIze(event.target.value);
        }}
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
        onChange={(event) => {
          setfontColor(event.target.value);
        }}
      >
        <option value="white">⚪</option>
        <option value="red">🔴</option>
        <option value="blue">🔵</option>
        <option value="yellow">🟡</option>
        <option value="green">🟢</option>
      </select>
    </div>
  );
}

export default TextStyler;
