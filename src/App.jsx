import React from "react";
import './App.css';

const albumsData = [
  {
    title: "Alone",
    image: "/images/Alone.jpeg", 
    tracks: [
      "Alone",
      "Sweet Agnes",
      "Oh! Tengo Suerte"
    ],
  },
  {
    title: "Takanaka",
    image: "/images/Takanaka.jpeg",
    tracks: [
      "Blue Lagoon",
      "Ready To Fly",
      "Penguin Dancer"
    ],
  },
  {
    title: "Brazilian Skies",
    image: "/images/Brasilian_Skies.jpeg",
    tracks: [
      "Brasilian Skies",
      "Traffic Jam",
      "Star Wars Samba"
    ],
  },
  {
    title: "Natsu Zen Kai",
    image: "/images/Natsu_Zen_Kai.jpeg",
    tracks: [
      "Midnight Lover",
      "Malibu",
      "Summer Breeze"
    ],
  }
];

const Discography = () => {
  return (
    <div className="container">
      <div className="artist-info">
        <h1>Masayoshi Takanaka</h1>
        <img
          src="/images/Takanaka Red Suit.jpeg"
          alt="Masayoshi Takanaka"
          className="artist-image"
        />
      </div>
      <div className="albums-section">
        <h2>Masayoshi Takanaka's albums</h2>
        <div className="albums">
          {albumsData.map((album, index) => (
            <details key={index} className="album">
              <summary>{album.title} <span>+</span></summary>
              <img src={album.image} alt={album.title} className="album-cover"/>
              <ul>
                {album.tracks.map((track, i) => (
                  <li key={i}>{track}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Discography />
    </div>
  );
}

export default App;