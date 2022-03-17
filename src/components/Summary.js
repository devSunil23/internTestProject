import React from "react";

const Summary = ({ sumIndex, dataFirst }) => {
  return (
    <>
      <div className="containerSummary">
        {dataFirst.map((item, index) => {
          if (sumIndex === index) {
            return (
              <div key={index}>
                <img
                  src={item.show.image.original}
                  alt="imgData"
                  className="summaryImg"
                />
                <p id="para">{item.show.summary}</p>
                <a href={item.show.url} className="summaryUrl">
                  Book Movie
                </a>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Summary;
