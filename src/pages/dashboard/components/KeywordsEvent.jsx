import React from "react";

export const KeywordsEvent = ({ keywords, handleEvent }) => {
  const words = keywords.split(" ");

  return (
    <>
      {words.map((word, index) => {
        return (
          <span
            key={index}
            onClick={handleEvent(word)}
            style={{ cursor: "pointer" }}
          >
            {" "}
            {word}
          </span>
        );
      })}
    </>
  );
};
