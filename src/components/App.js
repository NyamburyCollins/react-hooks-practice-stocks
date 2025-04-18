import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";

function App() {
  const initialStocks = [
    { id: 1, ticker: "GOOG", name: "Google", price: 1194.80, type: "Tech" },
    { id: 2, ticker: "FB", name: "Facebook", price: 168.85, type: "Tech" },
    { id: 3, ticker: "AMZN", name: "Amazon", price: 1982.51, type: "Retail" },
    { id: 4, ticker: "AAPL", name: "Apple", price: 208.74, type: "Tech" },
    { id: 5, ticker: "MSFT", name: "Microsoft", price: 123.24, type: "Tech" },
    { id: 6, ticker: "WMT", name: "Walmart", price: 117.59, type: "Retail" },
    { id: 7, ticker: "BA", name: "Boeing", price: 350.62, type: "Aerospace" },
  ];

  const [stocks, setStocks] = useState(initialStocks);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterBy, setFilterBy] = useState("All");

  const handleBuyStock = (stock) => {
    if (!portfolio.some(item => item.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  };

  const handleSellStock = (stock) => {
    setPortfolio(portfolio.filter(item => item.id !== stock.id));
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);
  };

  const handleFilter = (filterType) => {
    setFilterBy(filterType);
  };

  const sortedStocks = [...stocks].sort((a, b) => {
    if (sortBy === "Alphabetically") {
      return a.ticker.localeCompare(b.ticker);
    } else {
      return a.price - b.price;
    }
  });

  const filteredStocks = filterBy === "All" 
    ? sortedStocks 
    : sortedStocks.filter(stock => stock.type === filterBy);

  const stockTypes = [...new Set(stocks.map(stock => stock.type))];

  return (
    <div className="App">
      <div className="filter-sort">
        <div>
          <strong>Sort By:</strong>
          <button 
            onClick={() => handleSort("Alphabetically")}
            className={sortBy === "Alphabetically" ? "active" : ""}
          >
            Alphabetically
          </button>
          <button 
            onClick={() => handleSort("Price")}
            className={sortBy === "Price" ? "active" : ""}
          >
            Price
          </button>
        </div>
        <div>
          <strong>Filter By:</strong>
          <select 
            value={filterBy} 
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option value="All">All</option>
            {stockTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
      
      <StockContainer 
        stocks={filteredStocks} 
        onStockClick={handleBuyStock} 
      />
      <PortfolioContainer 
        portfolio={portfolio} 
        onStockClick={handleSellStock} 
      />
    </div>
  );
}

export default App;