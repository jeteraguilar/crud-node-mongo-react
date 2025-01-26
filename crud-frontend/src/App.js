import React from 'react';
import AppRoutes from './routes';  // Importando as rotas
import Header from './components/header/Header'; // Importando o Header
import Footer from './components/footer/Footer'; // Importando o Footer
import './styles/global.css'; // Estilos globais

const App = () => {
  return (
    <div>
      {/* Header fixo no topo */}
      <Header />

      {/* Conteúdo principal */}
      <div className="content">
        <AppRoutes />
      </div>

      {/* Footer fixo na base */}
      <Footer />
    </div>
  );
};

export default App;