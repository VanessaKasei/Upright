import './App.css';
import React from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Footer from "./pages/Footer";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
