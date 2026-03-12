import { useRef, useState } from "react";

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
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <>
      <div>
        <h2>Callback Ref</h2>
        <nav>
          <button>Neo</button>
          <button>Millie</button>
          <button>Bella</button>
        </nav>
      </div>
      <div>
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
                <img src={cat} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
