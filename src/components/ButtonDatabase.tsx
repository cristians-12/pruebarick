"use client";
import React from "react";
import useFirebase from "../../hooks/firebase/useFirebase";

const ButtonDatabase: React.FC = () => {
  const { addDocument } = useFirebase();

  return (
    <div
      onClick={addDocument}
      className="fixed lg:bottom-5 bottom-0 lg:w-auto w-[100px] bg-green-400 text-black px-3 py-2 rounded-xl cursor-pointer hover:scale-105 lg:right-5"
    >
      <span>Guardar mis favoritos</span>
    </div>
  );
};

export default ButtonDatabase;
