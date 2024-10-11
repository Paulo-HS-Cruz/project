import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
        <HomePage />
      <Footer />
    </div>
  );
};

export default App;
