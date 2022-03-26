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
  const [mounth, setMouth] = useState(1);
  const [eyebrows, setEyebrows] = useState(1);
  const [facialHair, setFacialHair] = useState(0);
  const [earrings, setEarrings] = useState(0);
  const [hat, setHat] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [neckWear, setNeckWear] = useState(0);
  const [clothing1, setClothing1] = useState(1);
  const [clothing2, setClothing2] = useState(1);
  const [clothing3, setClothing3] = useState(1);
  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setHair(Math.floor(Math.random() * total.hair));
    setMouth(Math.floor(Math.random() * total.mouth));
    setEyebrows(Math.floor(Math.random() * total.eyebrows));
    setFacialHair(Math.floor(Math.random() * total.facial_hair));
    setEarrings(Math.floor(Math.random() * total.earrings));
    setHat(Math.floor(Math.random() * total.hat));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setNeckWear(Math.floor(Math.random() * total.neckwear));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
  };
  useEffect(() => {
    randomize();
  }, []);

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
      <div className="title">CHARACTER</div>
      <div className="subtitle">Customization</div>
      <div className="divider"></div>

      <div className="avatar-component">
        <div className="avatar-wrapper">
          <div className="avatar">
            <img
              src={process.env.PUBLIC_URL + getImgSource("body", body)}
              alt=""
              width="250"
              style={{ position: "absolute" }}
            ></img>

            <img
              src={process.env.PUBLIC_URL + getImgSource("eyes", eyes)}
              alt=""
              width="250"
              style={{ position: "absolute" }}
            ></img>

            <img
              src={process.env.PUBLIC_URL + getImgSource("hair", hair)}
              alt=""
              width="250"
              style={{ position: "absolute" }}
            ></img>

            <img
              src={process.env.PUBLIC_URL + getImgSource("layer_1", clothing1)}
              alt=""
              width="250"
              style={{ position: "absolute" }}
            ></img>

            <img
              src={process.env.PUBLIC_URL + getImgSource("layer_2", clothing2)}
              alt=""
              width="250"
              style={{ position: "absolute" }}
            ></img>

            <img
              src={process.env.PUBLIC_URL + getImgSource("layer_3", clothing3)}
              alt=""
              width="250"
              style={{ position: "absolute" }}
            ></img>

            <img
              src={process.env.PUBLIC_URL + getImgSource("mouths", mounth)}
              alt=""
              width="250"
              style={{ position: "absolute" }}
            ></img>

            <img
              src={process.env.PUBLIC_URL + "./character/noses.1.png"}
              alt=""
              width="250"
              style={{ position: "absolute" }}
            ></img>

            <img
              src={process.env.PUBLIC_URL + getImgSource("eyesbrows", eyebrows)}
              alt=""
              width="250"
              style={{ position: "absolute" }}
            ></img>

            <img
              src={
                process.env.PUBLIC_URL + getImgSource("facial_hair", facialHair)
              }
              alt=""
              width="250"
              style={{ position: "absolute" }}
            ></img>

            <img
              src={process.env.PUBLIC_URL + getImgSource("earrings", earrings)}
              alt=""
              width="250"
              style={{ position: "absolute" }}
            ></img>

            <img
              src={process.env.PUBLIC_URL + getImgSource("glasses", glasses)}
              alt=""
              width="250"
              style={{ position: "absolute" }}
            ></img>

            <img
              src={process.env.PUBLIC_URL + getImgSource("hats", hat)}
              alt=""
              width="250"
              style={{ position: "absolute" }}
            ></img>

            <img
              src={process.env.PUBLIC_URL + getImgSource("neckwear", neckWear)}
              alt=""
              width="250"
              style={{ position: "absolute" }}
            ></img>
          </div>
          <div className="random">
            <button className="button-random" onClick={randomize}>
              Random
            </button>
          </div>
        </div>

        <div className="component-list">
          <div className="list-wrapper">
            <div className="list-title"> Body </div>
            <div className="list">
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
          </div>

          <div className="list-wrapper">
            <div className="list-title"> Eyes </div>
            <div className="list">
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
          </div>

          <div className="list-wrapper">
            <div className="list-title"> Hair </div>
            <div className="list">
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
          </div>

          <div className="list-wrapper">
            <div className="list-title"> Clothing Layer 1 </div>
            <div className="list">
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
          </div>

          <div className="list-wrapper">
            <div className="list-title"> Clothing layer 2 </div>
            <div className="list">
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
          </div>

          <div className="list-wrapper">
            <div className="list-title"> Clothing layer 3 </div>
            <div className="list">
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
          </div>

          <div className="list-wrapper">
            <div className="list-title"> Mouth </div>
            <div className="list">
              {getArrayPart(24).map((item) => (
                <button onClick={() => setMouth(item)} className="image">
                  <img
                    src={process.env.PUBLIC_URL + getImgSource("mouths", item)}
                    alt=""
                    height="60"
                  ></img>
                </button>
              ))}
            </div>
          </div>

          <div className="list-wrapper">
            <div className="list-title"> Facial hair </div>
            <div className="list">
              {getArrayPart(18).map((item) => (
                <button onClick={() => setFacialHair(item)} className="image">
                  <img
                    src={
                      process.env.PUBLIC_URL + getImgSource("facial_hair", item)
                    }
                    alt=""
                    height="60"
                  ></img>
                </button>
              ))}
            </div>
          </div>

          <div className="list-wrapper">
            <div className="list-title"> Eyebrows </div>
            <div className="list">
              {getArrayPart(15).map((item) => (
                <button onClick={() => setEyebrows(item)} className="image">
                  <img
                    src={
                      process.env.PUBLIC_URL + getImgSource("eyebrows", item)
                    }
                    alt=""
                    height="60"
                  ></img>
                </button>
              ))}
            </div>
          </div>

          <div className="list-wrapper">
            <div className="list-title"> Glasses </div>
            <div className="list">
              {getArrayPart(18).map((item) => (
                <button onClick={() => setGlasses(item)} className="image">
                  <img
                    src={process.env.PUBLIC_URL + getImgSource("glasses", item)}
                    alt=""
                    height="60"
                  ></img>
                </button>
              ))}
            </div>
          </div>

          <div className="list-wrapper">
            <div className="list-title"> Earrings </div>
            <div className="list">
              {getArrayPart(33).map((item) => (
                <button onClick={() => setEarrings(item)} className="image">
                  <img
                    src={
                      process.env.PUBLIC_URL + getImgSource("earrings", item)
                    }
                    alt=""
                    height="60"
                  ></img>
                </button>
              ))}
            </div>
          </div>

          <div className="list-wrapper">
            <div className="list-title"> Hat </div>
            <div className="list">
              {getArrayPart(29).map((item) => (
                <button onClick={() => setHat(item)} className="image">
                  <img
                    src={process.env.PUBLIC_URL + getImgSource("hats", item)}
                    alt=""
                    height="60"
                  ></img>
                </button>
              ))}
            </div>
          </div>

          <div className="list-wrapper">
            <div className="list-title"> Neckwear </div>
            <div className="list">
              {getArrayPart(19).map((item) => (
                <button onClick={() => setNeckWear(item)} className="image">
                  <img
                    src={
                      process.env.PUBLIC_URL + getImgSource("neckwear", item)
                    }
                    alt=""
                    height="60"
                  ></img>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
