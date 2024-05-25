
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Formulario from './component/Formulario';
import React, { useState } from 'react';

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleMostrarFormulario = () => {
    setMostrarFormulario(true);
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h1>FORMULARIOS DE PETICION DE CAMBIOS</h1>
          </div>
        </div>
        {!mostrarFormulario && (
          <div className="row mt-3">
            <div className="col-10 offset-1">
              <table className="table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Aquí puedes agregar filas de datos si es necesario */}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {!mostrarFormulario && (
          <div className="row mt-3">
            <div className="col-12 text-center">
              <button className="btn btn-primary" onClick={handleMostrarFormulario}>Mostrar Formulario</button>
            </div>
          </div>
        )}
        {mostrarFormulario && <Formulario />}
      </div>
    </section>
  );
}

export default App;