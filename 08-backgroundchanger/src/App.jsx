import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");


  return (
    <div
      className="fixed left-0 right-0  top-0  bottom-0 flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center">
        <div className="flex gap-3 p-4 bg-white/30 backdrop-blur-lg rounded-3xl shadow-lg">
          <button
            className="p-4 text-white rounded-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
              console.log("Color changed to Red"); // Debugging
            }}
          >
            Red
          </button>
          <button
            className="p-4 text-white rounded-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
              console.log("Color changed to Green"); // Debugging
            }}
          >
            Green
          </button>
          <button
            className="p-4 text-white rounded-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => {
              setColor("black");
              console.log("Color changed to Black"); // Debugging
            }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
