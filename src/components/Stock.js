import React from "react";
import PropTypes from "prop-types";

function Stock({ stock, onClick, actionLabel = "Buy" }) {
  return (
    <div className="stock-card" onClick={onClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: ${stock.price.toFixed(2)}</p>
          <button className="btn btn-sm btn-primary">
            {actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

Stock.propTypes = {
  stock: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  actionLabel: PropTypes.string
};

export default Stock;