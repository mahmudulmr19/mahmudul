import React from "react";
import { PuffLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="h-screen w-full min-h-full flex items-center justify-center">
      <PuffLoader size={60} color="#3ccf91" />
    </div>
  );
};

export default Loader;
