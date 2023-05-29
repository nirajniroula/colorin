"use client"; // This is a client component
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(
    null
  );
  const [selectedColor, setSelectedColor] = useState("#000000");

  function handleElementClick(event: { target: any }) {
    const element = event.target;
    setSelectedElement(element);
  }

  function handleColorChange(event: { target: { value: any } }) {
    const color = event.target.value;
    setSelectedColor(color);
  }

  useEffect(() => {
    if (selectedElement) {
      selectedElement.style.color = selectedColor;
    }
  }, [selectedElement, selectedColor]);

  return (
    <div>
      <h1 className="my-8">Check Colors</h1>
      <div className="my-8 flex items-center">
        <label htmlFor="colorPicker">Select a color:</label>
        <input
          type="color"
          id="colorPicker"
          value={selectedColor}
          onChange={handleColorChange}
        />
      </div>
      <div onClick={handleElementClick}>
        {/* Render the preview section with elements to select */}
        {/* Replace the following elements with your own content */}
        <h2>Element 1</h2>
        <p>Element 2</p>
        <button>Element 3</button>
      </div>
    </div>
  );
}
