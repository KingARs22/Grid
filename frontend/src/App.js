import './App.css';
import { useState } from "react";

function App() {
  const size = 3;
  const totalBoxes = size * size;
  const [matrix, setMatrix] = useState(Array(totalBoxes).fill("white"));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (matrix[index] === "white") {
      const newMatrix = [...matrix];
      newMatrix[index] = "green";
      setMatrix(newMatrix);
      setClickOrder([...clickOrder, index]);
    }

    if (clickOrder.length + 1 === totalBoxes) {
      setTimeout(() => {
        [...clickOrder, index].forEach((idx, i) => {
          setTimeout(() => {
            setMatrix((prev) => {
              const newMatrix = [...prev];
              newMatrix[idx] = "orange";
              return newMatrix;
            });
          }, i * 500);
        });
      }, 300);
    }
  };

  const handleReset = () => {
    setMatrix(Array(totalBoxes).fill("white"));
    setClickOrder([]);
  };

  return (
    <div>
      <div className="container">
  <div className="grid" style={{ gridTemplateColumns: `repeat(${size}, 50px)` }}>
    {matrix.map((color, index) => (
      <div key={index} onClick={() => handleClick(index)} className="box" style={{ backgroundColor: color }} />
    ))}
  </div>
  <button onClick={handleReset} className="button">Reset</button>
</div>
    </div>
  );
}

export default App;
