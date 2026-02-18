import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>🎨 Welcome to Color Palette Studio</h1>
      <p>Create beautiful color combinations instantly.</p>

      <button onClick={() => navigate("/palette")}>
        Generate Palette
      </button>
    </div>
  );
}

export default Home;
