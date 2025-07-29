import React from "react";
import "/styles.css";


const CafeCard = ({ cafe, onSelect }) => {
  return (
    <div className="cafe-card" onClick={() => onSelect(cafe)}>
      <h3>{cafe.nombre}</h3>
      <p>{cafe.direccion}</p>
      <p>⭐ {cafe.rating}</p>
    </div>
  );
};

export default CafeCard;
