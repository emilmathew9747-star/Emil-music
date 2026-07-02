import { useState } from "react";
import "./App.css";

const tracks = [
  {
    title: "Coming Soon",
    file: ""
  }
];

export default function App() {
  const [current, setCurrent] = useState(null);

  return (
    <div className="app">
      
      {/* NAV */}
      <div className="nav">
        <h2>EMIL MATHEW</h2>
      </div>

      {/* HERO */}
      <div className="hero">
        <div className="hero-text">
          <h1>Music Composer</h1>
          <p>Creating modern sound experiences</p>
        </div>

        <img src="/yourphoto.jpg" className="profile" />
      </div>

      {/* MUSIC */}
      <div className="music">
        <h2>Music</h2>

        <div className="grid">
          {tracks.map((t, i) => (
            <div
              key={i}
              className="card"
              onClick={() => setCurrent(t)}
            >
              <div className="card-inner">
                <h3>{t.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PLAYER */}
      {current && current.file && (
        <div className="player">
          <p>{current.title}</p>
          <audio controls autoPlay>
            <source src={current.file} />
          </audio>
        </div>
      )}

      {/* CONTACT */}
      <div className="contact">
        <a href="https://wa.me/919995345754">WhatsApp</a>
        <a href="https://instagram.com/Emil_mathew">Instagram</a>
      </div>

    </div>
  );
        }
