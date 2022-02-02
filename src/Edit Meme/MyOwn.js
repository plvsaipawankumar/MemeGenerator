import React, { useState } from "react";
import Navbar from "../Navbar";
import domtoimage from "dom-to-image";

function MyOwn() {
  const [file, setFile] = useState("");
  const handleChange = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setFile(url);
  };
  const [value, setValue] = useState({
    upperText: "",
    lowerText: "",
  });
  const { upperText, lowerText } = value;
  var domtoimage = require("dom-to-image");
  const onSubmit = () => {
    var node = document.getElementById("image1");
    domtoimage
      .toJpeg(document.getElementById("my-node"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };
  return (
    <div>
      <Navbar />
      <div>
        <input type="file" onChange={handleChange} />
      </div>
      <div className="columns m-auto">
        <div id="my-node">
          <figure
            class="image"
            width={{
              maxWidth: "512px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                zIndex: "2",
                fontSize: "50px",
                position: "absolute",
                fontWeight: "bolder",
                width: "34%",
                WebkitTextStroke: "2px black",
                color: "white",
              }}
            >
              {upperText}
            </div>
            <img src={file} style={{ zIndex: "1", maxWidth: "512px" }} />
            <div
              style={{
                textAlign: "center",
                zIndex: "2",
                fontSize: "50px",
                position: "absolute",
                bottom: "0px",
                fontWeight: "bolder",
                width: "34%",
                WebkitTextStroke: "2px black",
                color: "white",
              }}
            >
              {lowerText}
            </div>
          </figure>
        </div>
      </div>
      <div className="columns">
        <div class="field" className="column is-one-quarter"></div>
        <div class="field" className="column is-one-quarter">
          <label class="label">Upper Text</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              onChange={(e) => {
                setValue({ ...value, ["upperText"]: e.target.value });
              }}
            />
          </div>
        </div>
        <div class="field" className="column is-one-quarter">
          <label class="label">Lowe Text</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              onChange={(e) => {
                setValue({ ...value, ["lowerText"]: e.target.value });
              }}
            />
          </div>
        </div>
        <button onClick={onSubmit}>Download Meme</button>
      </div>
    </div>
  );
}

export default MyOwn;
