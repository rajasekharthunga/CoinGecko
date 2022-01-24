import React from "react";
import "../Styles/Card.css";

function CardContainer({ coin, clickHandler }) {
  return (
    <div className="card-container-main-container">
      <div className="card" onClick={e => clickHandler(coin.id)}>
        <div className="card-image">
          <img src={coin.image} />
        </div>
        <div className="card-text">
          {/* <span classname="date">4 days ago</span> */}
          <h2 className="coin-name">{coin.name}</h2>
          <h2 className="coin-symbol">{coin.symbol}</h2>
          {/* // symbol */}
        </div>
        <div className="card-stats">
          <div className="stat">
            <div className="value">{coin.high_24h}</div>
            <div className="type">High 24 hour Price</div>
          </div>
          <div className="stat border">
            <div className="value">{coin.current_price}</div>
            <div className="type">Current Price</div>
          </div>
          <div className="stat">
            <div className="value">{coin.low_24h}</div>
            <div className="type">Low 24 hour Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
