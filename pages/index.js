import React from "react";

const contestants = [
  {
    name: "MC Blaze",
    image: "https://via.placeholder.com/200",
    instagram: "https://instagram.com/mcblaze",
    youtube: "https://youtube.com/mcblaze",
  },
  {
    name: "Lil Verse",
    image: "https://via.placeholder.com/200",
    instagram: "https://instagram.com/lilverse",
    youtube: "https://youtube.com/lilverse",
  },
];

export default function Home() {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", backgroundColor: "#111", color: "white", minHeight: "100vh", padding: "20px" }}>
      <h1>Rap Battle Contestants</h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        {contestants.map((contestant, index) => (
          <div key={index} style={{ backgroundColor: "#222", padding: "20px", borderRadius: "10px", width: "250px" }}>
            <img src={contestant.image} alt={contestant.name} style={{ width: "100%", borderRadius: "10px" }} />
            <h2>{contestant.name}</h2>
            <p>
              <a href={contestant.instagram} target="_blank" style={{ color: "lightblue", marginRight: "10px" }}>Instagram</a>
              <a href={contestant.youtube} target="_blank" style={{ color: "red" }}>YouTube</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
