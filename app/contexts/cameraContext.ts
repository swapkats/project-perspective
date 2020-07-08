const createContext = (scene) => {
  let ctx = scene;

  const setCamera = (newCtx) => {
    ctx = newCtx;
  };

  const useCamera = () => {
    if (!ctx) {
      throw new Error('Context is not defined');
    }

    return ctx;
  };

  return { useCamera, setCamera };
};

export default createContext();
