import React from "react";

const Spinner = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-8 border-black/70 border-b-slate-300 border-l-slate-300"></div>
    </div>
  );
};

export default Spinner;
