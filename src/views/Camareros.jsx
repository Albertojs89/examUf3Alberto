// src/views/Camareros.jsx

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
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Grupo</th>
              <th>Mesa</th>
              <th>Cerveza</th>
              <th>Cantidad</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>{pedido.grupo}</td>
                <td>{pedido.numeroMesa}</td>
                <td>{pedido.cerveza}</td>
                <td>{pedido.cantidad}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      className={`btn w-100 btn-sm ${
                        pedido.estado === 'pendiente'
                          ? 'btn-outline-warning'
                          : 'btn-outline-success'
                      }`}
                    >
                      {pedido.estado === 'pendiente'
                        ? 'Pedido pendiente...'
                        : '¡Pedido servido!'}
                    </button>
                    <button className="btn btn-outline-danger w-100 btn-sm">
                      🗑 Borrar pedido
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Camareros;
