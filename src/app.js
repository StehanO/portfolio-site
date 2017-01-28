import { join } from 'path';
import express from 'express';
import ReactEngine from 'react-engine';
import Routes from './views/Routes';
import favicon from 'serve-favicon';

const app = express();

// create the view engine with `react-engine`
const engine = ReactEngine.server.create({
  routes: Routes,
  routesFilePath: join(__dirname, 'views/Routes.js')
});

app.engine('js', engine);

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'js');
app.set('view', ReactEngine.expressView);

app.use(express.static(join(__dirname, 'public')));
app.use(favicon(join(__dirname, 'public/favicon.ico')));

// add our app routes
app.get('/resume', (req, res) => {
  res.render(req.url, null);
});

app.get('/', (req, res) => {
  res.render(req.url, null);
});

app.use(function (err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_NOT_FOUND) {
    return res.status(404).send('Route Not Found!');
  } else {
    return res.status(500).send(err.message);
  }
});

app.listen(1337, function () {
  console.info('site is running on 1337');
});
