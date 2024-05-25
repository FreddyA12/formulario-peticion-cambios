// src/assets/Formulario.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './formulario.css'; // Si tienes un archivo CSS personalizado

const Formulario = () => {
  return (
    <div className="container">
      {/* Encabezado del formulario */}
      <div className="row">
        <div className="col text-center">
          <h2>Formulario de Gestión de Cambios</h2>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <div className="form-group">
            <label htmlFor="nombreProyecto">Nombre del Proyecto</label>
            <input type="text" className="form-control d-inline-block w-50" id="nombreProyecto" />
          </div>
        </div>
      </div>
      
      {/* Sección de Datos */}
      <div className="form-section">
        <div className="section-header">
          <h5>Datos</h5>
        </div>
        <div className="form-group row">
          <div className="col-md-6">
            <label htmlFor="nombreCambio">Nombre Cambio</label>
            <input type="text" className="form-control" id="nombreCambio" placeholder="Nombre del Cambio" />
          </div>
          <div className="col-md-6">
            <label htmlFor="repositorio">Repositorio</label>
            <input type="text" className="form-control" id="repositorio" placeholder="Repositorio" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-6">
            <label htmlFor="nombreSolicitante">Nombre Solicitante</label>
            <input type="text" className="form-control" id="nombreSolicitante" placeholder="Nombre del Solicitante" />
          </div>
          <div className="col-md-3">
            <label htmlFor="fechaSolicitud">Fecha Solicitud</label>
            <input type="date" className="form-control" id="fechaSolicitud" />
          </div>
          <div className="col-md-3">
            <label htmlFor="prioridad">Prioridad</label>
            <select className="form-control" id="prioridad">
              <option>Alta</option>
              <option>Media</option>
              <option>Baja</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Sección de Descripción del Cambio */}
      <div className="form-section">
        <div className="section-header">
          <h5>Descripción del Cambio</h5>
        </div>
        <div className="form-group">
          <label htmlFor="categoriaCambio">Categoría del Cambio</label>
          <input type="text" className="form-control" id="categoriaCambio" placeholder="Categoría del Cambio" />
        </div>
        <div className="form-group">
          <label htmlFor="causaCambio">Causa/Origen del Cambio</label>
          <input type="text" className="form-control" id="causaCambio" placeholder="Causa/Origen del Cambio" />
        </div>
        <div className="form-group">
          <label htmlFor="descripcionCambio">Descripción del Cambio</label>
          <textarea className="form-control" id="descripcionCambio" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="razonCambio">Razón del Cambio</label>
          <textarea className="form-control" id="razonCambio" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="impactoCambio">Impacto del Cambio</label>
          <textarea className="form-control" id="impactoCambio" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="solicitanteCambio">Justificación del Cambio</label>
          <textarea className="form-control" id="justificacionCambio" rows="3"></textarea>
        </div>
      </div>
      
      {/* Sección de Implicaciones del Cambio */}
      <div className="form-section">
        <div className="section-header">
          <h5>Implicaciones del Cambio</h5>
        </div>
        <div className="form-group">
          <label htmlFor="consecuencias">Cronograma/Duración</label>
          <textarea className="form-control" id="consecuencias" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="evaluaciones">Evaluaciones</label>
          <textarea className="form-control" id="evaluaciones" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="recursos">Implicación de Recursos</label>
          <textarea className="form-control" id="recursos" rows="3"></textarea>
        </div>
      </div>
      
      {/* Sección de Retroalimentación */}
      <div className="form-section">
        <div className="section-header">
          <h5>Retroalimentación</h5>
        </div>
        <div className="form-group">
          <label htmlFor="recomendaciones">Recomendaciones</label>
          <textarea className="form-control" id="recomendaciones" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="comentarios">Comentarios</label>
          <textarea className="form-control" id="comentarios" rows="3"></textarea>
        </div>
      </div>
      
      {/* Sección de Aprobación */}
      <div className="form-section">
        <div className="section-header">
          <h5>Aprobación</h5>
        </div>
        <div className="form-group row">
          <div className="col-md-6">
            <label htmlFor="nombreAprobacion">Nombre</label>
            <input type="text" className="form-control" id="nombreAprobacion" placeholder="Nombre" />
          </div>
          <div className="col-md-6">
            <label htmlFor="fechaAprobacion">Fecha</label>
            <input type="date" className="form-control" id="fechaAprobacion" />
          </div>
        </div>
      </div>

      {/* Botón de Enviar */}
      <div className="form-section">
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-lg btn-lg-custom">Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
