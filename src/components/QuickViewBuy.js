import React from "react";
import {Link} from "react-router-dom";


function QuickViewBuy(props) {
  console.log("quickviewbuy props", props);
  if (!props.artworks.assets){
    return (
      <p>loading</p>
    )
  }
  console.log(props.artworks.assets);
  const artNames=[]
  return (
    <ul className="buy-page">
      {props.artworks.assets.filter((artwork) => artwork.image_url !== '' && artwork.name !== "웰컴 카드")
        .map(artwork => {
          if (!artNames.includes(artwork.name)) {
            artNames.push (artwork.name);
          return (
          <li className="list-item" key={artwork.id}>
          <Link to={`/${artwork.id}`} className="link-box">
            <img className="art-image" src={artwork.image_url} alt={artwork.description}/>
            <div className="artwork-title_frame">
            <h2 className="artT">{artwork.name}</h2>
            <h2 className="artist">{artwork.username}</h2>
            <h3 className="artDescription">{artwork.description< 5 ? "": artwork.description}</h3>
            <Link to={artwork.permalink} className="seller"><h3>Link to OpenSea</h3></Link>
            </div>
          </Link>
          </li>
          )}}
        )}
    </ul>
  );
}

export default QuickViewBuy;
