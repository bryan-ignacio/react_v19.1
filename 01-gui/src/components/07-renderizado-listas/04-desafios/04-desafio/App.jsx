/*
Lista con un separador 
Este ejemplo renderiza un famoso haiku de Tachibana Hokushi, 
con cada línea envuelta en una etiqueta <p>. 
Tu trabajo consiste en insertar un separador <hr /> entre cada párrafo.
Un haiku solo tiene tres líneas, 
pero tu solución debería funcionar con cualquier número de líneas.
Fíjate que los elementos <hr /> solo aparecen entre los elementos <p>, ¡no en el inicio o el final!
*/
const poem = {
  lines: [
    "Escribo, borro y reescribo",
    "Borro de nuevo, y luego",
    "Florece una amapola.",
  ],
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <li key={index}>
          <p key={index}>{line}</p>
          {index < poem.lines.length - 1 && <hr />}
        </li>
      ))}
    </article>
  );
}
