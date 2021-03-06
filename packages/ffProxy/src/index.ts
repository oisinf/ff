import express from 'express';
import http from 'http';
import path from 'path';
import routes from './routes';
import bodyParser from 'body-parser';
const app = express();

const httpServer = http.createServer(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../ff/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'packages', 'ff', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => console.log(`listening on ${PORT}`));
