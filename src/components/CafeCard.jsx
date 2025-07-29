import React from "react";
import "/styles.css";

const CafeCard = ({ cafe, onSelect }) => {
  return (
    <div
      className="cafe-card"
      onClick={() => onSelect(cafe)}
      tabIndex="0"
      aria-label={`Seleccionar ${cafe.nombre}`}
    >
      {cafe.imagen && (
        <img
          src={cafe.imagen}
          alt={`Imagen de ${cafe.nombre}`}
          className="cafe-img"
        />
      )}
      <h3>{cafe.nombre}</h3>
      <p>{cafe.direccion}</p>
      <p>⭐ {cafe.rating ?? "Sin calificación"}</p>
    </div>
  );
};

export default CafeCard;
