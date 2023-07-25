import { useState } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(false);
  const [afterLoading, setAfterLoading] = useState(false);

  return {
    loading,
    setLoading,
    afterLoading,
    setAfterLoading,
  };
};

export default useLoading;
