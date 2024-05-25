// src/assets/Principal.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './principal.css'; // Importa tu archivo CSS personalizado si es necesario

const Principal = () => {
  return (
    <div className="container">
      {/* Fila superior con el encabezado */}
      <div className="row justify-content-center mb-4">
        <div className="col-12">
          <h1 className="text-center">Inicio</h1>
        </div>
      </div>
      {/* Fila central con la tabla */}
      <div className="row justify-content-center mb-4">
        <div className="col-12">
          <div className="content p-4 bg-light border rounded">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Formulario</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Formulario 1</td>
                  <td><button className="btn btn-primary">Acción</button></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Formulario 2</td>
                  <td><button className="btn btn-primary">Acción</button></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Formulario 3</td>
                  <td><button className="btn btn-primary">Acción</button></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Formulario 4</td>
                  <td><button className="btn btn-primary">Acción</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Fila inferior con el botón de crear */}
      <div className="row justify-content-center">
        <div className="col-12">
          <button className="btn btn-success btn-custom">Crear</button>
        </div>
      </div>
    </div>
  );
};

export default Principal;
