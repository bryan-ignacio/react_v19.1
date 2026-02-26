import { useRef } from "react";

export default function CatFriends() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({});
  }

  return (
    <>
      <nav>
        <button onClick={handleScrollToFirstCat}>{"Gato 1"}</button>
        <button onClick={handleScrollToSecondCat}>{"Gato 2"}</button>
        <button onClick={handleScrollToThirdCat}>{"Gato 3"}</button>

        <div>
          <ul>
            <li>
              <img
                ref={firstCatRef}
                src="https://placecats.com/neo/300/200"
                alt="gato1"
              />
            </li>
            <li>
              <img
                ref={secondCatRef}
                src="https://placecats.com/millie/200/200"
                alt="gato2"
              />
            </li>
            <li>
              <img
                ref={thirdCatRef}
                src="https://placecats.com/bella/199/200"
                alt="gato3"
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
