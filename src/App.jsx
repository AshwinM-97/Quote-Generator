import React, { useState } from "react";
import Heading from "./Heading";
import Options from "./Options";
import "./App.css";
import Box from "./Box";

function App() {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([
    "Business",
    "Character",
    "Competition",
    "Courage",
    "Ethics",
    "Failure",
    "Faith",
    "Famous Quotes",
    "Freedom",
    "Future",
    "Genius",
    "Gratitude",
    "Happiness",
    "Honor",
    "Imagination",
    "Inspirational",
    "Knowledge",
    "Life",
    "Love",
    "Motivational",
    "Nature",
    "Opportunity",
    "Perseverance",
    "Science",
    "Spirituality",
    "Success",
    "Time",
    "Wisdom",
  ]);
  return (
    <>
      <div className="wrapper">
        <Heading />
        <Options tags={tags} setInput={setInput} />
        <Box input={input} />
      </div>
    </>
  );
}

export default App;
