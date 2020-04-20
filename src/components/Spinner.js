import React from "react";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <Loader
      type="Rings"
      color="rgb(7, 42, 71)"
      height={100}
      width={100}
      timeout={10000}
    />
  );
};
export default Spinner;
