import express from "express";
import http from "http";
import path from "path";
import routes from "./routes.js";
const app = express();

const httpServer = http.createServer(app);
routes(app);

// eslint-disable-next-line no-undef
// if (process.env.NODE_ENV === "production") {
app.use(express.static("../ff/build"));

app.get("*", (req, res) => {
  res.sendFile(
    // eslint-disable-next-line no-undef
    path.resolve(__dirname, "packages", "ff", "build", "index.html")
  );
});
// }

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
// eslint-disable-next-line no-undef
httpServer.listen(PORT, () => console.log(`listening on ${PORT}`));
