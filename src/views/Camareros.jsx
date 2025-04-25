// src/views/Camareros.jsx
import TablaPedidos from '../components/TablaPedidos';

function Camareros() {
  const pedidos = [
    {
      id: 1,
      numeroMesa: 1,
      grupo: 'Borrachos de DAW2',
      cerveza: 'Estrella Galicia',
      cantidad: 3,
      estado: 'pendiente',
    },
    {
      id: 2,
      numeroMesa: 2,
      grupo: 'Cabezones contentos',
      cerveza: 'Estrella DAMM',
      cantidad: 2,
      estado: 'servido',
    },
    {
      id: 3,
      numeroMesa: 3,
      grupo: 'Els BirraKings',
      cerveza: 'Mahou Clásica',
      cantidad: 5,
      estado: 'pendiente',
    },
  ];

  return (
    <div className="container mt-5 mb-5 p-5 border shadow-lg">
      <div className="row">
        <h1 className="text-center mb-5">----- Vista camareros -----</h1>
        <h3>Pedidos</h3>
        <TablaPedidos pedidos={pedidos} />
      </div>
    </div>
  );
}

export default Camareros;
