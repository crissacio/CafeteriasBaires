import React from "react";
import "./../styles.css";

const CafeDetail = ({ cafe }) => {
  if (!cafe) return null;

  return (
    <div className="cafe-detail">
      <h2>{cafe.nombre}</h2>
      <p><strong>Dirección:</strong> {cafe.direccion}</p>
      <p><strong>Rating:</strong> ⭐ {cafe.rating}</p>
      <p><strong>Descripción:</strong> {cafe.descripcion}</p>
    </div>
  );
};

export default CafeDetail;
