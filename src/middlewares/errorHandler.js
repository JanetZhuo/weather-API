const responseFormatter = require("../utils/responseFormatter");
const logger = require("../utils/logger");

module.exports = (error, req, res, next) => {
  if (error.response) {
    const data = error.response.data;
    if (data.cod === "429") {
      logger.warn(data.message);
      return responseFormatter(
        res,
        503,
        "The server is busy at the moment, please try again later",
        null
      );
    }
    return responseFormatter(
      res,
      Number.parseFloat(data.cod),
      data.message,
      null
    );
  } else if (error.request) {
    logger.warn(error.request);
  } else {
    logger.error("Error", error.message);
  }
  logger.error(error.stack);
  return ReferenceError(
    res,
    500,
    "Something failed, we are investigating!",
    null
  );
};
