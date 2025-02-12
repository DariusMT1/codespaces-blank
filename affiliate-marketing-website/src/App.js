import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={HomePage} />
          <Route path="/product/:id" element={ProductPage} />
          <Route path="/about" element={AboutPage} />
          <Route path="/contact" element={ContactPage} />
          <Route element={NotFoundPage} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;