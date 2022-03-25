import "./index.css";
import { useState, useEffect } from "react";
import Avatar from "./components/Avatar";
import { PartList } from "./components/PartList";
const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState();
  const [eyes, setEyes] = useState();
  const [hair, setHair] = useState();
  const [mounth, setMounth] = useState();
  const [eyebrows, setEyebrows] = useState();
  const [glasses, setGlasses] = useState();
  const [clothing1, setClothing1] = useState();
  const [clothing2, setClothing2] = useState();
  const [clothing3, setClothing3] = useState();

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
