import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="container">
      <h2>Página não encontrada :(</h2>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default NotFound;
