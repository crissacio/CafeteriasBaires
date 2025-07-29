import React from "react";
import "/styles.css";

const CafeDetail = ({ cafe }) => {
  if (!cafe) return null;

  return (
    <article className="cafe-detail">
      <header>
        <h2>{cafe.nombre}</h2>
      </header>

      {cafe.imagen && (
        <img
          src={cafe.imagen}
          alt={`Foto de ${cafe.nombre}`}
          className="cafe-detail-img"
        />
      )}

      <section>
        <p><strong>📍 Dirección:</strong> {cafe.direccion}</p>
        <p><strong>🏘️ Barrio:</strong> {cafe.barrio}</p>
        <p><strong>📞 Teléfono:</strong> {cafe.telefono}</p>
        <p><strong>⭐ Rating:</strong> {cafe.rating ?? "Sin calificación"}</p>
        <p><strong>📝 Descripción:</strong> {cafe.descripcion}</p>
      </section>
    </article>
  );
};

export default CafeDetail;
