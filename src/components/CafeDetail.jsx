import React from "react";
import "/styles.css";

const CafeDetail = ({ cafe }) => {
  if (!cafe) return null;

  return (
    <div className="cafe-detail">
      <h2>{cafe.nombre}</h2>

      {cafe.imagen && (
        <img
          src={cafe.imagen}
          alt={`Foto de ${cafe.nombre}`}
          className="cafe-detail-img"
        />
      )}

      <p><strong>Dirección:</strong> {cafe.direccion}</p>
      <p><strong>Barrio:</strong> {cafe.barrio}</p>
      <p><strong>Teléfono:</strong> {cafe.telefono}</p>
      <p><strong>Rating:</strong> ⭐ {cafe.rating ?? "Sin calificación"}</p>
      <p><strong>Descripción:</strong> {cafe.descripcion}</p>
    </div>
  );
};

export default CafeDetail;
