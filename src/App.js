import "./index.css";
import { useState, useEffect } from "react";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  facial_hair: 17,
  earrings: 32,
  glasses: 17,
  hat: 28,
  neckwear: 18,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState(1);
  const [eyes, setEyes] = useState(1);
  const [hair, setHair] = useState(1);
  const [mounth, setMounth] = useState(1);
  const [eyebrows, setEyebrows] = useState(1);
  const [facialHair, setFacialHair] = useState(0);
  const [earrings, setEarrings] = useState(0);
  const [hat, setHat] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [neckWear, setNeckWear] = useState(0);
  const [clothing1, setClothing1] = useState(1);
  const [clothing2, setClothing2] = useState(1);
  const [clothing3, setClothing3] = useState(1);

  const getImgSource = (part, n) => {
    const imgSource = `./character/${part}/${n}.png`;
    return imgSource;
  };

  const getArrayPart = (n) => {
    let Arr = [];
    for (let i = 1; i <= n; i++) {
      Arr.push(i);
    }
    return Arr;
  };

  return (
    <div className="App">
      <div className="avatar-wrapper">
        <div className="avatar">
          <img
            src={process.env.PUBLIC_URL + getImgSource("body", body)}
            alt=""
            height="250"
            style={{ position: "absolute" }}
          ></img>

          <img
            src={process.env.PUBLIC_URL + getImgSource("eyes", eyes)}
            alt=""
            height="250"
            style={{ position: "absolute" }}
          ></img>

          <img
            src={process.env.PUBLIC_URL + getImgSource("hair", hair)}
            alt=""
            height="250"
            style={{ position: "absolute" }}
          ></img>

          <img
            src={process.env.PUBLIC_URL + getImgSource("layer_1", clothing1)}
            alt=""
            height="250"
            style={{ position: "absolute" }}
          ></img>

          <img
            src={process.env.PUBLIC_URL + getImgSource("layer_2", clothing2)}
            alt=""
            height="250"
            style={{ position: "absolute" }}
          ></img>

          <img
            src={process.env.PUBLIC_URL + getImgSource("layer_3", clothing3)}
            alt=""
            height="250"
            style={{ position: "absolute" }}
          ></img>

          <img
            src={process.env.PUBLIC_URL + getImgSource("mounths", mounth)}
            alt=""
            height="250"
            style={{ position: "absolute" }}
          ></img>

          <img
            src={process.env.PUBLIC_URL + "./character/noses.1.png"}
            alt=""
            height="250"
            style={{ position: "absolute" }}
          ></img>

          <img
            src={process.env.PUBLIC_URL + getImgSource("eyesbrows", eyebrows)}
            alt=""
            height="250"
            style={{ position: "absolute" }}
          ></img>

          <img
            src={
              process.env.PUBLIC_URL + getImgSource("facial_hair", facialHair)
            }
            alt=""
            height="250"
            style={{ position: "absolute" }}
          ></img>

          <img
            src={process.env.PUBLIC_URL + getImgSource("earrings", earrings)}
            alt=""
            height="250"
            style={{ position: "absolute" }}
          ></img>

          <img
            src={process.env.PUBLIC_URL + getImgSource("glasses", glasses)}
            alt=""
            height="250"
            style={{ position: "absolute" }}
          ></img>

          <img
            src={process.env.PUBLIC_URL + getImgSource("hats", hat)}
            alt=""
            height="250"
            style={{ position: "absolute" }}
          ></img>

          <img
            src={process.env.PUBLIC_URL + getImgSource("neckwear", neckWear)}
            alt=""
            height="250"
            style={{ position: "absolute" }}
          ></img>
        </div>
        <div className="random">
          <button className="button">Random</button>
        </div>
      </div>
      <div className="list">
        {" "}
        {getArrayPart(17).map((item) => (
          <button onClick={() => setBody(item)} className="image">
            <img
              src={process.env.PUBLIC_URL + getImgSource("body", item)}
              alt=""
              height="60"
            ></img>
          </button>
        ))}
      </div>

      <div className="list">
        {" "}
        {getArrayPart(17).map((item) => (
          <button onClick={() => setEyes(item)} className="image">
            <img
              src={process.env.PUBLIC_URL + getImgSource("eyes", item)}
              alt=""
              height="60"
            ></img>
          </button>
        ))}
      </div>

      <div className="list">
        {" "}
        {getArrayPart(73).map((item) => (
          <button onClick={() => setHair(item)} className="image">
            <img
              src={process.env.PUBLIC_URL + getImgSource("hair", item)}
              alt=""
              height="60"
            ></img>
          </button>
        ))}
      </div>

      <div className="list">
        {" "}
        {getArrayPart(5).map((item) => (
          <button onClick={() => setClothing1(item)} className="image">
            <img
              src={process.env.PUBLIC_URL + getImgSource("layer_1", item)}
              alt=""
              height="60"
            ></img>
          </button>
        ))}
      </div>

      <div className="list">
        {" "}
        {getArrayPart(5).map((item) => (
          <button onClick={() => setClothing2(item)} className="image">
            <img
              src={process.env.PUBLIC_URL + getImgSource("layer_2", item)}
              alt=""
              height="60"
            ></img>
          </button>
        ))}
      </div>

      <div className="list">
        {" "}
        {getArrayPart(9).map((item) => (
          <button onClick={() => setClothing3(item)} className="image">
            <img
              src={process.env.PUBLIC_URL + getImgSource("layer_3", item)}
              alt=""
              height="60"
            ></img>
          </button>
        ))}
      </div>

      <div className="list">
        {" "}
        {getArrayPart(24).map((item) => (
          <button onClick={() => setMounth(item)} className="image">
            <img
              src={process.env.PUBLIC_URL + getImgSource("mounths", item)}
              alt=""
              height="60"
            ></img>
          </button>
        ))}
      </div>

      <div className="list">
        {" "}
        {getArrayPart(17).map((item) => (
          <button onClick={() => setFacialHair(item)} className="image">
            <img
              src={process.env.PUBLIC_URL + getImgSource("facial_hair", item)}
              alt=""
              height="60"
            ></img>
          </button>
        ))}
      </div>

      <div className="list">
        {" "}
        {getArrayPart(15).map((item) => (
          <button onClick={() => setEyebrows(item)} className="image">
            <img
              src={process.env.PUBLIC_URL + getImgSource("eyesbrows", item)}
              alt=""
              height="60"
            ></img>
          </button>
        ))}
      </div>

      <div className="list">
        {" "}
        {getArrayPart(17).map((item) => (
          <button onClick={() => setGlasses(item)} className="image">
            <img
              src={process.env.PUBLIC_URL + getImgSource("glasses", item)}
              alt=""
              height="60"
            ></img>
          </button>
        ))}
      </div>

      <div className="list">
        {" "}
        {getArrayPart(32).map((item) => (
          <button onClick={() => setEarrings(item)} className="image">
            <img
              src={process.env.PUBLIC_URL + getImgSource("earrings", item)}
              alt=""
              height="60"
            ></img>
          </button>
        ))}
      </div>

      <div className="list">
        {" "}
        {getArrayPart(28).map((item) => (
          <button onClick={() => setHat(item)} className="image">
            <img
              src={process.env.PUBLIC_URL + getImgSource("hats", item)}
              alt=""
              height="60"
            ></img>
          </button>
        ))}
      </div>

      <div className="list">
        {" "}
        {getArrayPart(18).map((item) => (
          <button onClick={() => setNeckWear(item)} className="image">
            <img
              src={process.env.PUBLIC_URL + getImgSource("neckwear", item)}
              alt=""
              height="60"
            ></img>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
