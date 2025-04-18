import React from "react";
import Stock from "./Stock";
import PropTypes from "prop-types";

function PortfolioContainer({ portfolio, onSellStock }) {
  return (
    <div className="portfolio-container">
      <h2 className="portfolio-header">My Portfolio</h2>
      {portfolio.length === 0 ? (
        <p className="empty-portfolio">Your portfolio is empty. Add some stocks!</p>
      ) : (
        <div className="stock-list">
          {portfolio.map((stock) => (
            <Stock
              key={stock.id}
              stock={stock}
              onClick={() => onSellStock(stock)}
              actionLabel="Sell"
            />
          ))}
        </div>
      )}
    </div>
  );
}

PortfolioContainer.propTypes = {
  portfolio: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      ticker: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      type: PropTypes.string
    })
  ).isRequired,
  onSellStock: PropTypes.func.isRequired
};

export default PortfolioContainer;