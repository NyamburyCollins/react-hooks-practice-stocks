import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onStockClick}) {
  return (
    <div>
      <h2>Stocks</h2>
      <div className="stock-list">
      {/* render stock list here*/}
      {stocks.map((stock) => (
        <Stock
        key={stock.id}
        stock={stock}
        onClick={() => onStockClick(stock)}
        />
        
      ))}
    </div>
    </div>
  );
}

export default StockContainer;
