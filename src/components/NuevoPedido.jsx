import { bd } from '../bd';

function NuevoPedido({ setBirraSeleccionada }) {
  const handleSeleccion = (e) => {
    const idSeleccionado = parseInt(e.target.value);
    const birra = bd.find((b) => b.id === idSeleccionado);
    setBirraSeleccionada(birra || null);
  };

  return (
    <>
      <h3>Grupo</h3>
      <label htmlFor="nombreGrupo" className="form-label">Nombre del grupo:</label>
      <input type="text" className="form-control mt-2" placeholder="Borrachos de DAW2" />

      <label htmlFor="numeroMesa" className="form-label mt-3">Mesa número</label>
      <input type="number" className="form-control mt-2" placeholder="0" />

      <h3 className="mt-5">Haz tu pedido</h3>
      <div className="d-flex gap-3">
        <select name="cervezas" id="cervezas" className="form-control" onChange={handleSeleccion}>
          <option value="">Selecciona qué birra quieres</option>
          {bd.map((birra) => (
            <option key={birra.id} value={birra.id}>
              {birra.nombre}
            </option>
          ))}
        </select>

        <input type="number" defaultValue={0} className="form-control" />
      </div>

      <button className="btn btn-success mt-4 w-100">¡Enviar pedido!</button>
    </>
  );
}

export default NuevoPedido;
