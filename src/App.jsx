import React from "react";
import Home from "./pages/Home";
import CafeDetail from "./components/CafeDetail";
import { useState } from "react";

const App = () => {
  const [cafeSeleccionado, setCafeSeleccionado] = useState(null);

  return (
    <div className="app-container">
      <div style={{ flex: 2 }}>
        <Home onSelectCafe={setCafeSeleccionado} />
      </div>
      {cafeSeleccionado && (
        <div className="fixed-detail">
          <CafeDetail cafe={cafeSeleccionado} />
        </div>  
      )}
    </div>
  );
};

export default App;
