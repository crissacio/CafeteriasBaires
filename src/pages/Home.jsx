import React, { useState } from "react";
import cafes from "../data/cafes";
import CafeCard from "../components/CafeCard";
import CafeDetail from "../components/CafeDetail";

const Home = () => {
  const [cafeSeleccionado, setCafeSeleccionado] = useState(null);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>TuCoffee ☕</h1>
      <p>Explorá las mejores cafeterías de Capital Federal</p>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cafes.map((cafe) => (
          <CafeCard
            key={cafe.id}
            cafe={cafe}
            onSelect={(c) => setCafeSeleccionado(c)}
          />
        ))}
      </div>

      {cafeSeleccionado && (
        <div style={{ marginTop: "2rem" }}>
          <CafeDetail cafe={cafeSeleccionado} />
        </div>
      )}
    </div>
  );
};

export default Home;
