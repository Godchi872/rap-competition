import React from "react";
import Image from "next/image";

const contestants = [
  {
    name: "MC Blaze",
    image: "/mc_blaze.jpg", // Image located in public folder
    instagram: "https://instagram.com/mcblaze",
    youtube: "https://youtube.com/mcblaze"
  },
  {
    name: "Lil Verse",
    image: "/lil_verse.jpg",
    instagram: "https://instagram.com/lilverse",
    youtube: "https://youtube.com/lilverse"
  }
];

export default function Home() {
  return (
    <div style={{
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#111",
      color: "white",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <h1 style={{ marginBottom: "20px" }}>Rap Battle Contestants</h1>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px"
      }}>
        {contestants.map((contestant, index) => (
          <div key={index} style={{
            backgroundColor: "#222",
            padding: "20px",
            borderRadius: "10px",
            width: "250px"
          }}>
            <Image 
              src={contestant.image} 
              alt={contestant.name} 
              width={200} 
              height={200}
              style={{ borderRadius: "10px" }} 
            />
            <h2 style={{ marginTop: "10px" }}>{contestant.name}</h2>
            <p style={{ marginTop: "10px" }}>
              <a 
                href={contestant.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "#1DA1F2", marginRight: "10px" }}
              >
                Instagram
              </a>
              <a 
                href={contestant.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "#FF0000" }}
              >
                YouTube
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
