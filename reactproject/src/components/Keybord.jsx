import React, { useState } from "react";
import Key from "./Key";
import SelectType from "./SelectType";

function Keybord() {
  const en = "qwertyuiopasdfghjklzxcvbnm";
  const he = "קראטוןםפשדגכעיחלךזסבהנמצתץ";
  const special = "[]{}/`'.,?!@#$%^&*";

  const [language, setLanguage] = useState(en);
  const [input, setInput] = useState("");

  return (
    <>
      {/* <button onClick={() => setLanguage(he)}>עברית</button>
      <button onClick={() => setLanguage(en)}>אנגלית</button>
      <button onClick={() => setLanguage(special)}>special</button>
      <button
        onClick={() => {
          setInput("");
        }}
      >
        clear
      </button> */}
      <div className="select">
        <SelectType />
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
        {special.split("").map((char, i) => (
          <Key key={i} char={char} input={input} setInput={setInput} />
        ))}

        <button
          className="delete key"
          onClick={() => {
            setInput(input.slice(0, input.length - 1));
          }}
        >
          delete
        </button>
      </div>
    </>
  );
}

export default Keybord;
