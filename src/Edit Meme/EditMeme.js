import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import JsFileDownloader from "js-file-downloader";

function EditMeme() {
  const meme = useLocation().state.item;
  console.log(meme);
  const [url, setUrl] = useState(meme.url);
  const [data, setData] = useState({
    template_id: meme.id,
    username: process.env.REACT_APP_NAME,
    password: process.env.REACT_APP_PASSWORD,
    boxes: [],
  });

  const generateMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${data.template_id}&username=${data.username}&password=${data.password}`;
    data.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
    });
    console.log(url);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data.url);
        setUrl(data.data.url);
      });
  };

  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const downloadFile = () => {
    const fileUrl = url;
    console.log(fileUrl);
    new JsFileDownloader({
      url: fileUrl,
    })
      .then(function () {
        // Called when download ended
        setSuccess("File downloaded");
      })
      .catch(function (error) {
        // Called when an error occurred
        setErr("Unable to download file");
      });
  };
  return (
    <div class="columns is-mobile is-centered is-vcentered ">
      <div class="mt-6">
        {err}
        {success}
        <img src={url} style={{ width: "400px", border: "1px solid black" }} />
        {Array(meme.box_count)
          .fill(1)
          .map((el, i) => {
            return (
              <div key={i}>
                <input
                  type="text"
                  placeholder={`Meme Caption ${i + 1}`}
                  onChange={(e) => {
                    const newBoxes = data.boxes;
                    newBoxes[i] = { text: e.target.value };
                    setData({ ...data, boxes: newBoxes });
                  }}
                />
              </div>
            );
          })}
        <button onClick={generateMeme}>Generate Meme</button>
        <Link to="/">
          <button>New Template</button>
        </Link>
        <button onClick={downloadFile}>Click to download</button>
      </div>
    </div>
  );
}

export default EditMeme;
