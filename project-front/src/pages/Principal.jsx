import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/principal.css";
import Swal from "sweetalert2";

const Principal = ({ setShowFormulario }) => {
  const [formularios, setFormularios] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [ordenarPor, setOrdenarPor] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [itemsPorPagina, setItemsPorPagina] = useState(5);
  const [formulariosOrdenados, setFormulariosOrdenados] = useState([]);

  useEffect(() => {
    listaFormularios();
  }, []);

  useEffect(() => {
    ordenar();
  }, [ordenarPor]);

  useEffect(() => {
    setFormulariosOrdenados(formularios);
  }, [formularios]);

  const listaFormularios = async () => {
    try {
      const response = await axios.get("http://localhost:3000/formulario");
      setFormularios(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleRowClick = (id) => {
    setSelectedRow(id);
  };

  const handleEditClick = () => {
    if (selectedRow !== null) {
      setShowFormulario(selectedRow);
    } else {
      Swal.fire({
        html: "<i>Seleccione un formulario por favor...</i>",
        icon: "error",
      });
    }
  };

  const eliminarFormulario = async () => {
    if (selectedRow !== null) {
      try {
        const response = await axios.delete(`http://localhost:3000/formulario/${selectedRow}`);
        setFormularios(formularios.filter(form => form.id !== selectedRow));
        setSelectedRow(null);
        if (response.data.affected > 0) {
          Swal.fire({
            html: "<i>Formulario eliminado</i>",
            icon: "success",
          });
        } else {
          Swal.fire({
            html: "<i>Error, intentelo más tarde...</i>",
            icon: "error",
          });
        }
      } catch (error) {
        Swal.fire({
          html: "<i>Error, intentelo más tarde...</i>",
          icon: "error",
        });
      }
    } else {
      Swal.fire({
        html: "<i>Seleccione un formulario por favor...</i>",
        icon: "error",
      });
    }
  };

  const ordenar = () => {
    let itemsOrdenados = [...formularios];
    switch (ordenarPor) {
      case 'Estado':
        itemsOrdenados.sort((a, b) => {
          const estadoOrden = {
            'Pendiente': 1,
            'Aprobado': 2,
            'Rechazado': 3
          };
          return estadoOrden[a.estado] - estadoOrden[b.estado];
        });
        break;
      case 'Prioridad':
        itemsOrdenados.sort((a, b) => {
          const orden = {
            'Alta': 1,
            'Media': 2,
            'Baja': 3
          }
          return orden[a.prioridad] - orden[b.prioridad];
        });
        break;
      case 'Fecha':
        itemsOrdenados.sort((a, b) => {
          return new Date(b.fecha_solicitud) - new Date(a.fecha_solicitud);
        });
        break;
      default:
        break;
    }
    setFormulariosOrdenados(itemsOrdenados);
  };

  const paginate = (pageNumber) => setPaginaActual(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(formulariosOrdenados.length / itemsPorPagina); i++) {
    pageNumbers.push(i);
  }

  const showFormularios = () => {
    const ultimoItem = paginaActual * itemsPorPagina;
    const primerItem = ultimoItem - itemsPorPagina;
    return formulariosOrdenados.slice(primerItem, ultimoItem).map((form, index) => (
      <tr
        key={form.id}
        className={form.id === selectedRow ? "table-active" : ""}
        onClick={() => handleRowClick(form.id)}
        style={{ cursor: "pointer" }}
      >
        <th scope="row">{primerItem + index + 1}</th>
        <td>{form.nombre_cambio}</td>
        <td>{form.nombre_solicitante}</td>
        <td>{form.fecha_solicitud}</td>
        <td>{form.prioridad}</td>
        <td>{form.estado}</td>
      </tr>
    ));
  };

  return (
    <div className="container">
      <div className="row justify-content-center  mb-2">
        <div className="col section-header d-flex justify-content-center align-items-center m-0">
          <h2>Lista de Formularios</h2>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-10"></div>
        <div className="col-2">
          <label className="fw-bold">Ordenar por:</label>
          <select
            className="form-control bg-light border rounded"
            id="prioridad"
            value={ordenarPor}
            onChange={(e) => {
              setOrdenarPor(e.target.value);
              ordenar();
            }}
          >
            <option>Ninguno</option>
            <option>Fecha</option>
            <option>Estado</option>
            <option>Prioridad</option>
          </select>
        </div>
      </div>

      <div className="row justify-content-center mb-4">
        <div className="col-12">
          <div className="content p-4 bg-light border rounded">
            <table className="table table-striped" id="Tabla">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre del Cambio</th>
                  <th scope="col">Nombre del Solicitante</th>
                  <th scope="col">Fecha de la solicitud</th>
                  <th scope="col">Prioridad</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>{showFormularios()}</tbody>
            </table>
            <nav className="d-flex justify-content-between align-items-center">
              <ul className="pagination mb-0">
                {pageNumbers.map((number) => (
                  <li key={number} className="page-item">
                    <a onClick={() => paginate(number)} href="!#" className="page-link">
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
              <div>
                <select onChange={(e) => setItemsPorPagina(parseInt(e.target.value))} value={itemsPorPagina} className="form-select">
                  <option value={5}>5 por página</option>
                  <option value={10}>10 por página</option>
                  <option value={20}>20 por página</option>
                  <option value={50}>50 por página</option>
                </select>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <button
            className="btn btn-primary btn-lg me-4 px-5"
            onClick={() => setShowFormulario(true)}
          >
            Nuevo
          </button>
          <button
            className="btn btn-secondary btn-lg ms-4 me-4 px-5"
            onClick={handleEditClick}
          >
            Editar
          </button>
          <button
            className="btn btn-danger btn-lg ms-4 px-5"
            onClick={eliminarFormulario}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Principal;
