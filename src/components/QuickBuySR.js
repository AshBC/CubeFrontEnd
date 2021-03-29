import React from "react";
import { Link } from "react-router-dom";

function QuickBuySR(props) {
  console.log(props);
  if (!props.artworks) {
    return <p>loading</p>;
  }
  // console.log(props.artworks);
  const artNames = [];
  return (
    <ul className="buy-page">
      {props.artworks
        .filter((artwork) => artwork.image !== "")
        .map((artwork) => {
          if (!artNames.includes(artwork.name)) {
            artNames.push(artwork.name);

            return (
              <li className="list-item" key={artwork.id}>
                <img
                  className="art-image"
                  src={artwork.image}
                  alt={artwork.description}
                />
                <div className="artwork-title_frame">
                  <h2 className="artT">{artwork.name}</h2>
                  <h2 className="artist">{artwork.username}</h2>
                  <h3 className="artDescription">{artwork.description}</h3>
                  <a href={artwork.url} className="seller">
                    <h3>Super Rare ➝ </h3>
                  </a>
                </div>
              </li>
            );
          }
        })}
    </ul>
  );
}

export default QuickBuySR;
