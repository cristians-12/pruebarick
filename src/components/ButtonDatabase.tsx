"use client";
import useFirebase from "@/hooks/firebase/useFirebase";
import React from "react";

const ButtonDatabase: React.FC = () => {
  const { addDocument } = useFirebase();

  return (
    <div
      onClick={addDocument}
      className="fixed lg:bottom-5 bottom-0 lg:w-auto w-[100px] bg-green-700 bg-opacity-70 text-white px-3 py-2 rounded-xl cursor-pointer hover:scale-105 lg:right-5 hover:bg-green-600 transition-all duration-200 ease-in-out shadow-lg"
    >
      <span>Guardar mis favoritos</span>
    </div>
  );
};

export default ButtonDatabase;
