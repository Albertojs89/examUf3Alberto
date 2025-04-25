import { createContext, useState, useContext } from 'react';

const PedidosContext = createContext();

export function PedidosProvider({ children }) {
  const [pedidos, setPedidos] = useState([]);

  const agregarPedido = (pedido) => {
    const nuevoPedido = {
