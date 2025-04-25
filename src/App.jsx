// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Usuarios from './views/Usuarios';
import Camareros from './views/Camareros';

function App() {
  return (
    <>
      <Header />
      <main className="container mb-4">
        <Routes>
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/camareros" element={<Camareros />} />
          <Route path="/" element={<p>Benvingut al projecte d'examen!</p>} />
        </Routes>
      </main>
      <footer className="bg-dark text-white text-center py-3">
        © 2025 Examen Vite React
      </footer>
    </>
  );
}

export default App;
