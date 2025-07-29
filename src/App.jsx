import React, { useState } from "react";
import Home from "./pages/Home";
import CafeDetail from "./components/CafeDetail";
import Header from "./components/Header";

const App = () => {
  const [cafeSeleccionado, setCafeSeleccionado] = useState(null);

  return (
    <>
      <Header />
      <div className="app-container">
        <div className="cafe-list">
          <Home onSelectCafe={setCafeSeleccionado} />
        </div>
        {cafeSeleccionado && (
          <div className="fixed-detail">
            <CafeDetail cafe={cafeSeleccionado} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
