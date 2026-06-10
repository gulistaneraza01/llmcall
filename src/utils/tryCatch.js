const tryCatch = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
};

export default tryCatch;
