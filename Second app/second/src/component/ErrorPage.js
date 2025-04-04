import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      ErrorPage
      <Link to="/about">Move to About page</Link>
    </div>
  );
};

export default ErrorPage;
