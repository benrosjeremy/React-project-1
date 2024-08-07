import React, { useState } from "react";
import Key from "./Key";
// import SelectType from "./SelectType";
import Button from "@mui/material/Button";
import BasicButton from "./BasicButton";
import Stack from "@mui/material/Stack";

import RadioButtonsGroup from "./RadioButtonsGroup";

function Keybord() {
  const en = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  const EN =["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
  const he = ["ק","ר", "א", "ט", "ו", "ן", "ם", "פ", "ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ"];
  const special = [ "{","}","[","]","/", "`", "'", ".", ",", "?", "!", "@", "#", "$", "%", "^", "&", "*"]
  const emoji = ["😀", "😂", "😍", "🤔", "😎", "😭", "🤯", "🥳", "😇", "🥺", "🤓", "🤑", "🤠", "😡", "😴"];;
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const [language, setLanguage] = useState(en);
  const [input, setInput] = useState([""]);
  const [fontSize, setFontSIze] = useState("20px");
  const [fontColor, setfontColor] = useState("white");

  const [flag, setFlag] = useState(true);

  return (
    <>
      <div className="select">
        <Stack spacing={2} direction="row">
          <BasicButton language={he} name="Hebrew" setLanguage={setLanguage} />
          <BasicButton language={en} name="English" setLanguage={setLanguage} />
          <BasicButton
            language={special}
            name="Special"
            setLanguage={setLanguage}
          />
          <BasicButton
            language={emoji}
            name="emoji"
            setLanguage={setLanguage}
          />
          <BasicButton
            language={numbers}
            name="numbers"
            setLanguage={setLanguage}
          />
        </Stack>
      </div>
      <div
        className="output-area"
        style={{ fontSize: fontSize, color: fontColor }}
      >
        {input}
      </div>

      <div className="keyboard">
        {language.map((char, i) => (
          <Key key={i} char={char} input={input} setInput={setInput} />
        ))}
        <button
          className="space key"
          onClick={() => {
            setInput(input + " ");
          }}
        ></button>
        <button
          className="backspace key"
          style={{ backgroundColor: !flag ? "#564c4c" : "#fff" }}
          onClick={() => {
            setFlag(!flag);
            setLanguage(flag ? EN : en);
          }}
        >
          shift
        </button>
        <button
          className="backspace key"
          onClick={() => {
            setInput(input.slice(0, input.length - 1));
          }}
        >
          Backspace
        </button>
        <button
          className="backspace key"
          onClick={() => {
            setInput("");
          }}
        >
          {" "}
          Clear
        </button>
      </div>
      <div className="select" style={{gap:"15px"}}>
        <label for="size">font size:</label>
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
        <label for="color">color :</label>
        <select
          name="color"
          id="color"
          value={fontColor}
          onChange={(event) => {
            setfontColor(event.target.value);
          }}
        >
          <option value="white"></option>
          <option value="red">🔴</option>
          <option value="blue">🔵</option>
          <option value="yellow">🟡</option>
          <option value="green">🟢</option>
        </select>
        <RadioButtonsGroup input={input} setInput={setInput} />
        <div></div>
      </div>
    </>
  );
}

export default Keybord;
