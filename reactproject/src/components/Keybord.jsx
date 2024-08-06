import React, { useState } from "react";
import Key from "./Key";
// import SelectType from "./SelectType";
import Button from "@mui/material/Button";
import BasicButton from "./BasicButton";

function Keybord() {
  const en = "qwertyuiopasdfghjklzxcvbnm";
  const EN = en.toUpperCase();
  const he = "קראטוןםפשדגכעיחלךזסבהנמצתץ";
  const special = "[]{}/`'.,?!@#$%^&*";
  const emoji = "👍❤️🚗😊😀🤣😂😎😋😙😗🥰😐😕😬😩😨";
  const numbers = "1234567890";

  const [language, setLanguage] = useState(en);
  const [input, setInput] = useState("");

  const [flag, setFlag] = useState(true);

  return (
    <>
      <div className="select">
        <BasicButton language={he} name="Hebrew" setLanguage={setLanguage} />
        <BasicButton language={en} name="English" setLanguage={setLanguage} />
        <BasicButton language={special} name="Special" setLanguage={setLanguage}/>
        <BasicButton language={emoji} name="emoji" setLanguage={setLanguage} />
        <BasicButton language={numbers} name="numbers" setLanguage={setLanguage}  />
      </div>
      <div className="output-area">{input}</div>

      <div className="keyboard">
        {language.split("").map((char, i) => (
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
      <div className="select">

      </div>
    </>
  );
}

export default Keybord;
