
function FichaBirra({ nombre, descripcion, imagen }) {
  return (
    <div className="p-3 d-flex">
      <div className="w-50">
        <img src={imagen} alt={nombre} className="w-100" />
      </div>
      <div className="ms-3">
        <h4>{nombre}</h4>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}

export default FichaBirra;
