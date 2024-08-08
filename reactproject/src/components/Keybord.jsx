import React, { useState } from "react";
import Key from "./Key";
import SelectType from "./SelectType";
import BasicButton from "./BasicButton";
import Stack from "@mui/material/Stack";
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
      <div className="container">
        <div>
          <div dir={dir} className="output-area">
            {input.map((char, i) => (
              <span
                key={i}
                style={{ fontSize: char.fontSize, color: char.fontColor }}
              >
                {char.char === "/n" ? <br></br> : char.char}
              </span>
            ))}
            <span className="cursor">&nbsp;</span>
          </div>

          <div className="keyboard">
            {charsArrys.numbers.map((char, i) => (
              <Key
                key={i}
                char={char}
                input={input}
                setInput={setInput}
                fontSize={fontSize}
                fontColor={fontColor}
              />
            ))}
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
                setInput([...input, { char: "/n", fontSize, fontColor }]);
              }}
            >
              Enter
            </button>
            <button
              className="backspace key"
              onClick={() => setInput(input.slice(0, -1))}
            >
              Backspace
            </button>

            <button
              className="space key"
              onClick={() => {
                setInput([...input, { char: " ", fontSize, fontColor }]);
              }}
            ></button>
            <button className="backspace key" onClick={() => setInput([])}>
              Clear
            </button>
          </div>
        </div>
        <div style={{ gap: "15px", padding: "15px" }}>
          <Stack spacing={2} className="select">
            <SelectType setFontSIze={setFontSIze} setfontColor={setfontColor} />
            <BasicButton input={input} name="uperr all" setInput={setInput} />
            <BasicButton input={input} name="lower all" setInput={setInput} />
          </Stack>
        </div>
      </div>
    </>
  );
}

export default Keybord;
