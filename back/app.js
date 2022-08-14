require("dotenv/config");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");

const apiRouter = require("./routes");

const app = express();
app.set("PORT", process.env.PORT || 3005);

app.use(morgan("dev"));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use("/img", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);

app.listen(app.get("PORT"), () =>
  console.log(
    `Express Server is listening on "http://localhost:${app.get("PORT")}"`
  )
);
