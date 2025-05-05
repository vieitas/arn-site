import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Importar páginas
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  // Detectar se estamos no GitHub Pages ou em produção
  const isProduction = process.env.NODE_ENV === 'production';
  const isGitHubPages = window.location.hostname === 'vieitas.github.io';

  // Usar o basePath apenas em produção no GitHub Pages
  const basename = isProduction && isGitHubPages ? '/arn-site' : '';

  console.log('Environment:', process.env.NODE_ENV);
  console.log('Hostname:', window.location.hostname);
  console.log('Using basename:', basename);

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
