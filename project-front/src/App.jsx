// src/App.jsx
import React, { useState } from 'react';
import Principal from './Principal';
import Formulario from './Formulario';

function App() {
  const [showFormulario, setShowFormulario] = useState(false);

  return (
    <div className="App">
      {showFormulario ? (
        <Formulario setShowFormulario={setShowFormulario} />
      ) : (
        <Principal setShowFormulario={setShowFormulario} />
      )}
    </div>
  );
}

export default App;
