"use client";
import React from "react";
import useFirebase from "../../hooks/firebase/useFirebase";

const ButtonDatabase: React.FC = () => {
  const { addDocument } = useFirebase();

  return (
    <div
      onClick={addDocument}
      className="fixed bottom-5 bg-green-400 text-black px-3 py-2 rounded-xl cursor-pointer hover:scale-105 right-5"
    >
      <span>Guardar mis favoritos</span>
    </div>
  );
};

export default ButtonDatabase;
