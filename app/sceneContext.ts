const createContext = (scene) => {
  let ctx = scene;

  const setScene = (newCtx) => {
    ctx = newCtx;
  };

  const useScene = () => {
    if (!ctx) {
      throw new Error('Context is not defined');
    }

    return ctx;
  };

  return { useScene, setScene };
};

export default createContext();
