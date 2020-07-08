const createContext = (renderer) => {
  let ctx = renderer;

  const setRenderer = (newCtx) => {
    ctx = newCtx;
  };

  const useRenderer = () => {
    if (!ctx) {
      throw new Error('Context is not defined');
    }

    return ctx;
  };

  return { useRenderer, setRenderer };
};

export default createContext();
