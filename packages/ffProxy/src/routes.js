import request from 'request';
import axios from 'axios';
export default app => {
  app.get('/football-stuff', async (req, res) => {
    // TODO: Convert to use axios (using request even though deprecated as for some reason axios is just returning an empty string)
    request({ url: 'https://fantasy.premierleague.com/api/bootstrap-static/' }, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }
      return res.json(JSON.parse(body));
    });
  });
  app.get(`/png/:id`, (req, res) => {
    const playerID = req.params.id.replace('jpg', 'png');
    axios
      .get(`https://resources.premierleague.com/premierleague/photos/players/40x40/p${playerID}`, { responseType: 'arraybuffer' })
      .then(axRes => {
        const base64 = `data:${axRes.headers['content-type']};base64,${Buffer.from(
          String.fromCharCode(...new Uint8Array(axRes.data)),
          'binary'
        ).toString('base64')}`;
        res.send(base64);
      })
      .catch(() => res.status(404).json({ type: 'error', message: 'Resource not found' }));
  });
};
