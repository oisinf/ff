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
  app.get('/player_imgs/', async (req, res) => {
    const { pngs } = req.query;
    const data = await pngs.map(async id => {
      const src = id.replace('jpg', 'png');
      try {
        const axiosResponse = await axios.get(`https://resources.premierleague.com/premierleague/photos/players/40x40/p${src}`, {
          responseType: 'arraybuffer'
        });
        return `data:${axiosResponse.headers['content-type']};base64,${Buffer.from(
          String.fromCharCode(...new Uint8Array(axiosResponse.data)),
          'binary'
        ).toString('base64')}`;
      } catch {
        return 'not_found';
      }
    });
    Promise.all(data).then(result => {
      res.send(result);
    });
  });
};
