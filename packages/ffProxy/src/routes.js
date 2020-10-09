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
  app.get(`/png/:id`, (req, res) => {
    const playerID = req.params.id.replace("jpg", "png");
    request(
      {
        url: `https://resources.premierleague.com/premierleague/photos/players/40x40/p${playerID}`
      },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({
            type: "error",
            message: error
              ? error.message
              : `Status Code return: ${response.statusCode}`
          });
        }
        return res.send(body);
      }
    );
  });
};
