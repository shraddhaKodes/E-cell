import React, { useState } from "react";
import "./GridSection.css"; // Import the CSS file

const GridSection = () => {
  const [colors, setColors] = useState(Array(9).fill('blue'));
  const [clickedOrder, setClickedOrder] = useState([]);

  const handleClick = (index) => {
    const newColors = [...colors];
    newColors[index] = 'red'; // Change the clicked square to red

    const newClickedOrder = [...clickedOrder, index];
    setClickedOrder(newClickedOrder);

    if (index === 8) {
      setTimeout(() => {
        const resetColors = Array(9).fill('blue');
        newClickedOrder.forEach((clickedIndex, i) => {
          setTimeout(() => {
            const updatedColors = [...resetColors];
            updatedColors[clickedIndex] = 'red';
            setColors(updatedColors);
          }, i * 300); // Delay each click reset by 300ms
        });
      }, 500); // Initial delay before resetting colors
    } else {
      setColors(newColors); // Update colors if the last square is not clicked
    }
  };

  return (
    <div className="grid-section-container">
      <div className="grid-container">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`grid-item ${color === "red" ? "active" : ""}`}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GridSection;