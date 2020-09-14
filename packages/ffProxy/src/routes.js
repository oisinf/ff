import request from "request";

export default app => {
  app.get("/football-stuff", (req, res) => {
    request(
      { url: "https://fantasy.premierleague.com/api/bootstrap-static/" },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res
            .status(500)
            .json({ type: "error", message: error.message });
        }
        return res.json(JSON.parse(body));
      }
    );
  });
};
