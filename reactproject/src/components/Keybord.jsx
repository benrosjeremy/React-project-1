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
  
  const [input, setInput] = useState("");
  const [fontSize, setFontSIze] = useState("20px");
  const [fontColor, setfontColor] = useState("white");

  const [flag, setFlag] = useState(true);

  return (
    <>
      <div className="select">
        <RadioButtonsGroup language={language} setLanguage={setLanguage} />
        <Stack spacing={2} direction="row">
          <BasicButton
            language={charsArrys.he}
            name="Hebrew"
            setLanguage={setLanguage}
          />
          <BasicButton
            language={charsArrys.en}
            name="English"
            setLanguage={setLanguage}
          />
          <BasicButton
            language={charsArrys.special}
            name="Special"
            setLanguage={setLanguage}
          />
          <BasicButton
            language={charsArrys.emoji}
            name="emoji"
            setLanguage={setLanguage}
          />
          <BasicButton
            language={charsArrys.numbers}
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
            setLanguage(flag ? charsArrys.EN : charsArrys.en);
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
      <TextStyler
        fontSize={fontSize}
        setFontSIze={setFontSIze}
        fontColor={fontColor}
        setfontColor={setfontColor}
      />

      {/* <RadioButtonsGroup input={input} setInput={setInput} /> */}
    </>
  );
}

export default Keybord;
