import React, { useState } from "react";
import Key from "./Key";
// import SelectType from "./SelectType";
import BasicButton from "./BasicButton";
import Stack from "@mui/material/Stack";
import TextStyler from "./TextStyler";
import RadioButtonsGroup from "./RadioButtonsGroup";
import { charsArrys } from "./charsArrys";

function Keybord() {
  const [language, setLanguage] = useState(charsArrys.en);
  const [input, setInput] = useState([]);
  const [fontSize, setFontSIze] = useState("20px");
  const [fontColor, setfontColor] = useState("white");
  const [dir, setDir] = useState("ltr");

  const [flag, setFlag] = useState(true);

 
  return (
    <>
      <div className="select">
        <RadioButtonsGroup
          language={language}
          setLanguage={setLanguage}
          setDir={setDir}
        />
      </div>

      <div
        dir={dir}
        className="output-area"
        
      >
        {input.map((char, i) => (
          <span key={i} style={{ fontSize: char.fontSize, color: char.fontColor }}>
            {char.char}
          </span>
        ))}
      </div>

      <div className="keyboard">
        {language.map((char, i) => (
          <Key
            key={i}
            char={char}
            input={input}
            setInput={setInput}
            fontSize={fontSize}
            fontColor={fontColor}
          />
        ))}

        <button
          className="space key"
          onClick={() => {
            setInput([...input,{char:" ", fontSize, fontColor}]);
          }}
        ></button>

        <button
          className="backspace key"
          style={{ backgroundColor: !flag ? "#564c4c" : "#fff" }}
          onClick={() => {
            setFlag(!flag);
            setLanguage(flag ? charsArrys.EN : charsArrys.en);
          }}
        >
          shift
        </button>

        <button
          className="backspace key"
          onClick={() => {
            setInput(input.slice(0, -1));
          }}
        >
          Backspace
        </button>

        <button
          className="backspace key"
          onClick={() => {
            setInput([]);
          }}
        >
          Clear
        </button>
      </div>
      <div style={{ gap: "15px", padding: "15px" }}>
        <Stack spacing={2} direction="row" className="select">
          <TextStyler
            fontSize={fontSize}
            setFontSIze={setFontSIze}
            fontColor={fontColor}
            setfontColor={setfontColor}
          />
          <BasicButton
            input={input}
            name="uperr all"
            setInput={setInput}
          />
          <BasicButton
            input={input}
            name="lower all"
            setInput={setInput}
          />
        </Stack>
      </div>
    </>
  );
}

export default Keybord;
