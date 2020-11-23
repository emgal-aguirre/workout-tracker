module.exports = (app, _root) => {
  app.get("/", (req, res) => {
    res.sendFile(`${_root}/public/index.html`);
  });

  app.get("/stats", (req, res) => {
    res.sendFile(`${_root}/public/stats.html`);
  });

  app.get("/excercise", (req, res) => {
    res.sendFile(`${_root}/public/excercise.html`);
  });
};
