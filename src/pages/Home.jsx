import React, { useState } from "react";
import cafes from "../data/cafes";
import CafeCard from "../components/CafeCard";
import CafeDetail from "../components/CafeDetail";

const Home = () => {
  const [cafeSeleccionado, setCafeSeleccionado] = useState(null);

  return (
    <main className="app-container">
      <section className="cafe-list">
        <header>
          <h1>TuCoffee ☕</h1>
          <p>Explorá las mejores cafeterías de Capital Federal</p>
        </header>

        {cafes.map((cafe) => (
          <CafeCard
            key={cafe.id}
            cafe={cafe}
            onSelect={(c) => setCafeSeleccionado(c)}
          />
        ))}
      </section>

      {cafeSeleccionado && (
        <aside className="fixed-detail fade-in">
          <CafeDetail cafe={cafeSeleccionado} />
        </aside>
      )}
    </main>
  );
};

export default Home;

