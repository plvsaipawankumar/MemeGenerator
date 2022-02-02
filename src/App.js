import "./App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  const [memes, setMemes] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div class="columns is-multiline is-centered is-vcentered is-desktop">
        {memes.map((item, key) => {
          return (
            <div class="column is-narrow ">
              <Link key={key} to={"/editmeme/" + item.name} state={{ item }}>
                <img
                  src={item.url}
                  style={{ width: "200px", border: "1px solid black" }}
                  alt="meme Image"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
