import React, { useState } from "react";
import "../App.css";

function Palette() {
  const [colors, setColors] = useState(generatePalette());

  function generateColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function generatePalette() {
    return Array.from({ length: 5 }, generateColor);
  }

  return (
    <div className="palette-page">
      <h1>🎨 Color Palette Generator</h1>

      <div className="palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-card"
            style={{ backgroundColor: color }}
          >
            <span>{color}</span>
          </div>
        ))}
      </div>

      <button onClick={() => setColors(generatePalette())}>
        Generate New Palette
      </button>
    </div>
  );
}

export default Palette;
