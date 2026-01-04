/*
Si se quiere cambiar algunos o todos los elementos del array se puede usar map()
*/
import { useState } from "react";

export default function App() {
  return (
    <>
      <ShapeEditor />
    </>
  );
}

let initialShapes = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
];

function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    //map retorna un nuevo arreglo de shapes
    const nextShapes = shapes.map((shape) => {
      if (shape.type === "square") {
        // No cambia
        return shape;
      } else {
        // Devuelve un nuevo círculo 50px abajo
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    // Vuelve a renderizar con el nuevo _array_
    setShapes(nextShapes);
  }

  return (
    <>
      <button onClick={handleClick}>¡Mueve los círculos hacia abajo!</button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: "purple",
            position: "absolute",
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === "circle" ? "50%" : "",
            width: 20,
            height: 20,
          }}
        />
      ))}
    </>
  );
}
