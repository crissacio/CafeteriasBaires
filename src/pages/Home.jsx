import React, { useState } from "react";
import cafes from "../data/cafes";
import CafeCard from "../components/CafeCard";
import CafeDetail from "../components/CafeDetail";

const Home = () => {
  const [cafeSeleccionado, setCafeSeleccionado] = useState(null);

  return (
    <div className="app-container">
      <div className="cafe-list">
        <h1>TuCoffee ☕</h1>
        <p>Explorá las mejores cafeterías de Capital Federal</p>

        {cafes.map((cafe) => (
          <CafeCard
            key={cafe.id}
            cafe={cafe}
            onSelect={(c) => setCafeSeleccionado(c)}
          />
        ))}
      </div>

      {cafeSeleccionado && (
        <div className="fixed-detail">
          <CafeDetail cafe={cafeSeleccionado} />
        </div>
      )}
    </div>
  );
};

export default Home;
