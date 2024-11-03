"use client";

import { useState } from "react";

const useSearchModal = () => {
  const handleVisible = () => {
    setVisible(!visible);
  };

  const [visible, setVisible] = useState<boolean>(false);
  return {
    visible,
    handleVisible,
  };
};

export default useSearchModal;
