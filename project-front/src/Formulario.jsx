// src/assets/Formulario.jsx
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './formulario.css'; // Si tienes un archivo CSS personalizado
import Swal from 'sweetalert2';

const Formulario = ({ setShowFormulario }) => {
  // Estados para cada campo del formulario
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [nombreCambio, setNombreCambio] = useState('');
  const [repositorio, setRepositorio] = useState('');
  const [nombreSolicitante, setNombreSolicitante] = useState('');
  const [fechaSolicitud, setFechaSolicitud] = useState('');
  const [prioridad, setPrioridad] = useState('Alta');
  const [categoriaCambio, setCategoriaCambio] = useState('');
  const [causaCambio, setCausaCambio] = useState('');
  const [descripcionCambio, setDescripcionCambio] = useState('');
  const [razonCambio, setRazonCambio] = useState('');
  const [impactoCambio, setImpactoCambio] = useState('');
  const [justificacionCambio, setJustificacionCambio] = useState('');
  const [consecuencias, setConsecuencias] = useState('');
  const [evaluaciones, setEvaluaciones] = useState('');
  const [recursos, setRecursos] = useState('');
  const [recomendaciones, setRecomendaciones] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [nombreAprobacion, setNombreAprobacion] = useState('');
  const [fechaAprobacion, setFechaAprobacion] = useState('');

  const guardar = async (e) => {
    e.preventDefault();

    // Crear un objeto con todos los datos del formulario
    const formularioData = {
      nombreProyecto,
      nombreCambio,
      repositorio,
      nombreSolicitante,
      fechaSolicitud,
      prioridad,
      categoriaCambio,
      causaCambio,
      descripcionCambio,
      razonCambio,
      impactoCambio,
      justificacionCambio,
      consecuencias,
      evaluaciones,
      recursos,
      recomendaciones,
      comentarios,
      nombreAprobacion,
      fechaAprobacion
    };

    try {
      const response = await axios.post('http://localhost:3000/formulario', formularioData);
      console.log(response.data);
      Swal.fire({
        title: "<strong>Registro Exitoso</strong>",
        html: "<i>El estudiante se ha guardado con éxito</i>",
        icon: 'success'
    });
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      Swal.fire({
        title: "<strong>Registro Fallido</strong>",
        html: "<i>No se ha podido completar el registro.</i>",
        icon: 'error'
    });
    }
  };

  return (
    <div className="container">
      {/* Encabezado del formulario */}
      <div className="row">
        <div className="col text-center">
          <h2>Formulario de Gestión de Cambios</h2>
        </div>
      </div>
      <form onSubmit={guardar}>
        <div className="row">
          <div className="col text-center">
            <div className="form-group">
              <label htmlFor="nombreProyecto">Nombre del Proyecto</label>
              <input
                type="text"
                className="form-control d-inline-block w-50"
                id="nombreProyecto"
                value={nombreProyecto}
                onChange={(e) => setNombreProyecto(e.target.value)}
              />
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
              <input
                type="text"
                className="form-control"
                id="nombreCambio"
                value={nombreCambio}
                onChange={(e) => setNombreCambio(e.target.value)}
                placeholder="Nombre del Cambio"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="repositorio">Repositorio</label>
              <input
                type="text"
                className="form-control"
                id="repositorio"
                value={repositorio}
                onChange={(e) => setRepositorio(e.target.value)}
                placeholder="Repositorio"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              <label htmlFor="nombreSolicitante">Nombre Solicitante</label>
              <input
                type="text"
                className="form-control"
                id="nombreSolicitante"
                value={nombreSolicitante}
                onChange={(e) => setNombreSolicitante(e.target.value)}
                placeholder="Nombre del Solicitante"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="fechaSolicitud">Fecha Solicitud</label>
              <input
                type="date"
                className="form-control"
                id="fechaSolicitud"
                value={fechaSolicitud}
                onChange={(e) => setFechaSolicitud(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="prioridad">Prioridad</label>
              <select
                className="form-control"
                id="prioridad"
                value={prioridad}
                onChange={(e) => setPrioridad(e.target.value)}
              >
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
            <input
              type="text"
              className="form-control"
              id="categoriaCambio"
              value={categoriaCambio}
              onChange={(e) => setCategoriaCambio(e.target.value)}
              placeholder="Categoría del Cambio"
            />
          </div>
          <div className="form-group">
            <label htmlFor="causaCambio">Causa/Origen del Cambio</label>
            <input
              type="text"
              className="form-control"
              id="causaCambio"
              value={causaCambio}
              onChange={(e) => setCausaCambio(e.target.value)}
              placeholder="Causa/Origen del Cambio"
            />
          </div>
          <div className="form-group">
            <label htmlFor="descripcionCambio">Descripción del Cambio</label>
            <textarea
              className="form-control"
              id="descripcionCambio"
              rows="3"
              value={descripcionCambio}
              onChange={(e) => setDescripcionCambio(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="razonCambio">Razón del Cambio</label>
            <textarea
              className="form-control"
              id="razonCambio"
              rows="3"
              value={razonCambio}
              onChange={(e) => setRazonCambio(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="impactoCambio">Impacto del Cambio</label>
            <textarea
              className="form-control"
              id="impactoCambio"
              rows="3"
              value={impactoCambio}
              onChange={(e) => setImpactoCambio(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="justificacionCambio">Justificación del Cambio</label>
            <textarea
              className="form-control"
              id="justificacionCambio"
              rows="3"
              value={justificacionCambio}
              onChange={(e) => setJustificacionCambio(e.target.value)}
            ></textarea>
          </div>
        </div>
        
        {/* Sección de Implicaciones del Cambio */}
        <div className="form-section">
          <div className="section-header">
            <h5>Implicaciones del Cambio</h5>
          </div>
          <div className="form-group">
            <label htmlFor="consecuencias">Cronograma/Duración</label>
            <textarea
              className="form-control"
              id="consecuencias"
              rows="3"
              value={consecuencias}
              onChange={(e) => setConsecuencias(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="evaluaciones">Evaluaciones</label>
            <textarea
              className="form-control"
              id="evaluaciones"
              rows="3"
              value={evaluaciones}
              onChange={(e) => setEvaluaciones(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="recursos">Implicación de Recursos</label>
            <textarea
              className="form-control"
              id="recursos"
              rows="3"
              value={recursos}
              onChange={(e) => setRecursos(e.target.value)}
            ></textarea>
          </div>
        </div>
        
        {/* Sección de Retroalimentación */}
        <div className="form-section">
          <div className="section-header">
            <h5>Retroalimentación</h5>
          </div>
          <div className="form-group">
            <label htmlFor="recomendaciones">Recomendaciones</label>
            <textarea
              className="form-control"
              id="recomendaciones"
              rows="3"
              value={recomendaciones}
              onChange={(e) => setRecomendaciones(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="comentarios">Comentarios</label>
            <textarea
              className="form-control"
              id="comentarios"
              rows="3"
              value={comentarios}
              onChange={(e) => setComentarios(e.target.value)}
            ></textarea>
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
              <input
                type="text"
                className="form-control"
                id="nombreAprobacion"
                value={nombreAprobacion}
                onChange={(e) => setNombreAprobacion(e.target.value)}
                placeholder="Nombre"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="fechaAprobacion">Fecha</label>
              <input
                type="date"
                className="form-control"
                id="fechaAprobacion"
                value={fechaAprobacion}
                onChange={(e) => setFechaAprobacion(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Botón de Enviar */}
        <div className="form-section">
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-sm btn-lg-custom">Enviar</button>
            <button className="btn btn-secondary btn-sm btn-lg-custom ml-3" onClick={() => setShowFormulario(false)}>Volver</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
