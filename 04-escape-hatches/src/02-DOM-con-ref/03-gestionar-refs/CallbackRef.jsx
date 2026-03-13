import { useRef, useState } from "react";

import "./getionar.css";

function setupCatList() {
  const listCats = [];
  for (let i = 0; i < 10; i++) {
    listCats.push("https://loremflickr.com/320/240/cat?lock=" + i);
  }

  return listCats;
}

export default function CallbackRef() {
  const [listCats, setListCats] = useState(setupCatList);
  const itemsRef = useRef(null);

  function getMap() {
    if (!itemsRef.current) {
      // inicializa el map en el primer uso.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  function scrollToCat(cat) {
    const map = getMap();
    const node = map.get(cat);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <div>
        <h2>Callback Ref</h2>
        <nav>
          <button onClick={() => scrollToCat(listCats[3])}>Neo</button>
          <button onClick={() => scrollToCat(listCats[5])}>Millie</button>
          <button onClick={() => scrollToCat(listCats[9])}>Bella</button>
        </nav>
      </div>
      <div className="container-imgs">
        <ul>
          {listCats.map((cat) => {
            return (
              <li
                key={cat}
                ref={(node) => {
                  const map = getMap();
                  map.set(cat, node);
                  return () => map.delete(cat);
                }}
              >
                <img src={cat} className="img-cat" />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
