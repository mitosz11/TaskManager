export default (err, req, res, next) => {
  const httpStatusCode = err.status || 500;
  console.error("handler: ", err);
  console.error(`${httpStatusCode} - ${err.message} - ${req.method}`);
  res.status(httpStatusCode);
  res.json({
    ok: false,
    message: err.message,
  });
};
