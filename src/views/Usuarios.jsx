import { useState } from 'react';
import { bd } from '../bd';
import NuevoPedido from '../components/NuevoPedido';
import FichaBirra from '../components/FichaBirra';

function Usuarios() {
  const [birraSeleccionada, setBirraSeleccionada] = useState(null);

  return (
    <div className="container mt-3 p-5 border shadow-lg">
      <h1 className="text-center mb-5">----- Vista usuario -----</h1>
      <div className="row">
        {/* Columna esquerra */}
        <div className="col-12 col-md-6">
          <NuevoPedido setBirraSeleccionada={setBirraSeleccionada} />
        </div>

        {/* Columna dreta */}
        <div className="col-12 col-md-6 border">
          {birraSeleccionada ? (
            <FichaBirra
              nombre={birraSeleccionada.nombre}
              descripcion={birraSeleccionada.descripcion}
              imagen={birraSeleccionada.imagen}
            />
          ) : (
            <p className="text-center mt-5">Selecciona una birra per veure la fitxa 🍺</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
