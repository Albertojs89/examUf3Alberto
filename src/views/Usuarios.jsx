import NuevoPedido from '../components/NuevoPedido';
import FichaBirra from '../components/FichaBirra';

function Usuarios() {
  return (
    <div className="container mt-3 p-5 border shadow-lg">
      <h1 className="text-center mb-5">----- Vista usuario -----</h1>
      <div className="row">
        {/* Columna esquerra */}
        <div className="col-12 col-md-6">
          <NuevoPedido />
        </div>

        {/* Columna dreta */}
        <div className="col-12 col-md-6 border">
          <FichaBirra
            nombre="Estrella Galicia"
            descripcion="Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta."
            imagen="/estrella.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
