// src/App.jsx
import React, { useState } from 'react';
import Principal from './pages/Principal';
import Formulario from './pages/Formulario';

function App() {
  const [showFormulario, setShowFormulario] = useState(false);
  const [formularioId, setFormularioId] = useState(null);

  const handleShowFormulario = (id = null) => {
    setFormularioId(id);
    setShowFormulario(true);
  };

  return (
    <div className="App">
      {showFormulario ? (
        <Formulario setShowFormulario={setShowFormulario} formularioId={formularioId} />
      ) : (
        <Principal setShowFormulario={handleShowFormulario} />
      )}
    </div>
  );
}

export default App;
