import express from "express";
import request from "request";
import http from "http";
const app = express();

const httpServer = http.createServer(app);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/football-stuff", (req, res) => {
  request(
    {url: "https://fantasy.premierleague.com/api/bootstrap-static/"},
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({type: "error", message: error.message});
      }
      res.json(JSON.parse(body));
    }
  );
});
const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => console.log(`listening on ${PORT}`));
