import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/formulario.css';
import Swal from 'sweetalert2';

const Formulario = ({ setShowFormulario, formularioId }) => {

  const [nombre_proyecto, setNombreProyecto] = useState('');
  const [nombre_cambio, setNombreCambio] = useState('');
  const [repositorio, setRepositorio] = useState('');
  const [nombre_solicitante, setNombreSolicitante] = useState('');
  const [fecha_solicitud, setFechaSolicitud] = useState('');
  const [prioridad, setPrioridad] = useState('');
  const [categoria_cambio, setCategoriaCambio] = useState('');
  const [causa_cambio, setCausaCambio] = useState('');
  const [descripcion_cambio, setDescripcionCambio] = useState('');
  const [razon_cambio, setRazonCambio] = useState('');
  const [impacto_cambio, setImpactoCambio] = useState('');
  const [justificacion_cambio, setJustificacionCambio] = useState('');
  const [evaluaciones, setEvaluaciones] = useState('');
  const [implicacion_recursos, setRecursos] = useState('');
  const [recomendaciones, setRecomendaciones] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [nombre_aprobante, setNombreAprobacion] = useState('');
  const [fecha_aprobacion, setFechaAprobacion] = useState('');
  const [duracion, setDuracion] = useState('');
  const [estado, setEstado] = useState('');
  const [id, setId] = useState('');

  const cargarFormulario = async () => {
    if (formularioId) {
      try {
        const response = await axios.get(`http://localhost:3000/formulario/${formularioId}`);
        const form = response.data;
        setNombreProyecto(form.nombre_proyecto || '');
        setNombreCambio(form.nombre_cambio || '');
        setRepositorio(form.repositorio || '');
        setNombreSolicitante(form.nombre_solicitante || '');
        setFechaSolicitud(form.fecha_solicitud || '');
        setPrioridad(form.prioridad || '');
        setCategoriaCambio(form.categoria_cambio || '');
        setCausaCambio(form.causa_cambio || '');
        setDescripcionCambio(form.descripcion_cambio || '');
        setRazonCambio(form.razon_cambio || '');
        setImpactoCambio(form.impacto_cambio || '');
        setJustificacionCambio(form.justificacion_cambio || '');
        setEvaluaciones(form.evaluaciones || '');
        setRecursos(form.implicacion_recursos || '');
        setRecomendaciones(form.recomendaciones || '');
        setComentarios(form.comentarios || '');
        setNombreAprobacion(form.nombre_aprobante || '');
        setFechaAprobacion(form.fecha_aprobacion || '');
        setDuracion(form.duracion || '');
        setId(form.id || '')
      } catch (error) {
        console.error('Error al obtener el formulario:', error);
      }
    };
  }

  useEffect(() => {
    cargarFormulario();
  }, []);

  const guardar = async (e) => {
    e.preventDefault();
    const formularioData = {
      id,
      nombre_proyecto,
      nombre_cambio,
      repositorio,
      nombre_solicitante,
      fecha_solicitud,
      prioridad,
      categoria_cambio,
      causa_cambio,
      descripcion_cambio,
      razon_cambio,
      impacto_cambio,
      justificacion_cambio,
      evaluaciones,
      recomendaciones,
      comentarios,
      nombre_aprobante,
      fecha_aprobacion,
      duracion,
      implicacion_recursos,
      estado: "Pendiente",
      id
    };


    if (!formularioId) {
      try {
        await axios.post('http://localhost:3000/formulario', formularioData);
        Swal.fire({
          title: '<strong>Registro Exitoso</strong>',
          html: '<i>El formulario se ha guardado con éxito</i>',
          icon: 'success',
        });
      } catch (error) {
        Swal.fire({
          html: '<i>Complete todos los campos por favor...</i>',
          icon: 'error',
        });
      }
    } else {
      try {
        await axios.patch(`http://localhost:3000/formulario/update/${formularioId}`, formularioData);
        Swal.fire({
          title: '<strong>Registro Exitoso</strong>',
          html: '<i>El formulario se ha guardado con éxito</i>',
          icon: 'success',
        });
      } catch (error) {
        const { message } = error.response.data;
        if (message === 'Campos vacios') {
          Swal.fire({
            html: '<i>Complete todos los campos por favor...</i>',
            icon: 'error',
          });
        } else {
          Swal.fire({
            html: '<i>Error desconocido, inténtelo más tarde</i>',
            icon: 'error',
          });
        }
      }
    }


  };

  return (
    <>
      <div className="container">
        <div className="row px-3">
          <div className="col text-center section-header d-flex justify-content-center align-items-center mt-4">
            <h2>Formulario de Gestión de Cambios</h2>
          </div>
        </div>
        <form onSubmit={guardar}>
          <div className="form-group row">
            <div className="col-md-10 text-center">
              <label htmlFor="nombreProyecto" className="mb-2 me-2 fw-bold">Nombre del Proyecto:</label>
              <input
                type="text"
                className="form-control"
                id="nombreProyecto"
                value={nombre_proyecto}
                onChange={(e) => setNombreProyecto(e.target.value)}
              />
            </div>
            <div className="col-md-2 text-center">
              <label htmlFor="nombreProyecto" className="mb-2 me-2 ms-3 fw-bold">Form ID:</label>
              <input
                type="text"
                className="form-control"
                id="nombreProyecto"
                value={id}
                onChange={(e) => setId(e.target.value)}
                disabled
              />
            </div>
          </div>
          <div className="form-section">
            <div className="section-header d-flex justify-content-center align-items-center">
              <h5>Datos</h5>
            </div>
            <div className="form-group row ">
              <div className="col-md-6">
                <label htmlFor="nombreCambio" className='fw-bold'>Nombre Cambio</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreCambio"
                  value={nombre_cambio}
                  onChange={(e) => setNombreCambio(e.target.value)}
                />
              </div>
              <div className="col-md-6 ">
                <label htmlFor="repositorio" className='fw-bold'>Repositorio</label>
                <input
                  type="text"
                  className="form-control"
                  id="repositorio"
                  value={repositorio}
                  onChange={(e) => setRepositorio(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row ">
              <div className="col-md-6">
                <label htmlFor="nombreSolicitante" className='fw-bold'>Nombre Solicitante</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreSolicitante"
                  value={nombre_solicitante}
                  onChange={(e) => setNombreSolicitante(e.target.value)}
                />
              </div>
              <div className="col-md-3 ">
                <label htmlFor="fechaSolicitud" className='fw-bold'>Fecha Solicitud</label>
                <input
                  type="date"
                  className="form-control"
                  id="fechaSolicitud"
                  value={fecha_solicitud}
                  onChange={(e) => setFechaSolicitud(e.target.value)}
                />
              </div>
              <div className="col-md-3 ">
                <label htmlFor="prioridad" className='fw-bold'>Prioridad</label>
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

          <div className="form-section">
            <div className="section-header d-flex justify-content-center align-items-center">
              <h5>Descripción del Cambio</h5>
            </div>
            <div className="form-group ">
              <label htmlFor="categoriaCambio" className='fw-bold'>Categoría del Cambio</label>
              <input
                type="text"
                className="form-control "
                id="categoriaCambio"
                value={categoria_cambio}
                onChange={(e) => setCategoriaCambio(e.target.value)}
              />
            </div>
            <div className="form-group ">
              <label htmlFor="causaCambio" className="mt-3 fw-bold">Causa/Origen del Cambio</label>
              <input
                type="text"
                className="form-control "
                id="causaCambio"
                value={causa_cambio}
                onChange={(e) => setCausaCambio(e.target.value)}
              />
            </div>
            <div className="form-group ">
              <label htmlFor="descripcionCambio" className="mt-3 fw-bold">Descripción del Cambio</label>
              <textarea
                className="form-control "
                id="descripcionCambio"
                rows="3"
                value={descripcion_cambio}
                onChange={(e) => setDescripcionCambio(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group ">
              <label htmlFor="razonCambio" className="mt-3 fw-bold">Razón del Cambio</label>
              <textarea
                className="form-control"
                id="razonCambio"
                rows="3"
                value={razon_cambio}
                onChange={(e) => setRazonCambio(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group ">
              <label htmlFor="impactoCambio" className="mt-3 fw-bold">Impacto del Cambio</label>
              <textarea
                className="form-control"
                id="impactoCambio"
                rows="3"
                value={impacto_cambio}
                onChange={(e) => setImpactoCambio(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="justificacionCambio" className="mt-3 fw-bold">Justificación del Cambio</label>
              <textarea
                className="form-control"
                id="justificacionCambio"
                rows="3"
                value={justificacion_cambio}
                onChange={(e) => setJustificacionCambio(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="form-section">
            <div className="section-header d-flex justify-content-center align-items-center">
              <h5>Implicaciones del Cambio</h5>
            </div>
            <div className="form-group">
              <label htmlFor="duracion" className="fw-bold">Cronograma/Duración</label>
              <textarea
                className="form-control"
                id="duracion"
                rows="3"
                value={duracion}
                onChange={(e) => setDuracion(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="evaluaciones" className="mt-3 fw-bold">Evaluaciones</label>
              <textarea
                className="form-control"
                id="evaluaciones"
                rows="3"
                value={evaluaciones}
                onChange={(e) => setEvaluaciones(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="recursos" className="mt-3 fw-bold">Implicación de Recursos</label>
              <textarea
                className="form-control"
                id="recursos"
                rows="3"
                value={implicacion_recursos}
                onChange={(e) => setRecursos(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="form-section">
            <div className="section-header d-flex justify-content-center align-items-center">
              <h5>Retroalimentación</h5>
            </div>
            <div className="form-group">
              <label htmlFor="recomendaciones" className="fw-bold">Recomendaciones</label>
              <textarea
                className="form-control"
                id="recomendaciones"
                rows="3"
                value={recomendaciones}
                onChange={(e) => setRecomendaciones(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="comentarios" className="mt-3 fw-bold">Comentarios</label>
              <textarea
                className="form-control"
                id="comentarios"
                rows="3"
                value={comentarios}
                onChange={(e) => setComentarios(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="form-section">
            <div className="section-header d-flex justify-content-center align-items-center">
              <h5>Aprobación</h5>
            </div>
            <div className="form-group row">
              <div className="col-md-4">
                <label htmlFor="nombreAprobacion" className="fw-bold">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreAprobacion"
                  value={nombre_aprobante}
                  onChange={(e) => setNombreAprobacion(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="fechaAprobacion" className="fw-bold">Fecha</label>
                <input
                  type="date"
                  className="form-control"
                  id="fechaAprobacion"
                  value={fecha_aprobacion}
                  onChange={(e) => setFechaAprobacion(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="prioridad" className="fw-bold">Estado</label>
                <select
                  className="form-control"
                  id="prioridad"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                >
                  <option>Pendiente</option>
                  <option>Aceptado</option>
                  <option>Rechazado</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-ms btn-lg-custom">Guardar</button>
              <button type="button" className="btn btn-secondary btn-ms btn-lg-custom ml-3" onClick={() => setShowFormulario(false)}>Volver</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulario;
