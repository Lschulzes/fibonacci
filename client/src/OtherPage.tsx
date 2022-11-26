import React from "react";
import { Link } from "react-router-dom";

const OtherPage = () => {
  return (
    <div>
      I'm some OtherPage
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default OtherPage;
