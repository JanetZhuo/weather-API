const express = require("express");
const weatherRouters = require("./routes/weather");
const responseFormatter = require("./utils/responseFormatter");

const router = express.Router();

router.get("/", (req, res) =>
  responseFormatter(
    res,
    200,
    "Welcome to the weather api! Visit /api-docs for help",
    null
  )
);

router.use("/api/weather", weatherRouters);

module.exports = router;
