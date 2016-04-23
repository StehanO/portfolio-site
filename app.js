import {join} from 'path';
import express from 'express';
import ReactEngine from 'react-engine';
import routes from './views/routes.jsx';
import {projects} from './projects.js';

let app = express();

// create the view engine with `react-engine`
let engine = ReactEngine.server.create({
    routes: routes,
    routesFilePath: join(__dirname, 'views/routes.jsx'),
});

app.engine('.jsx', engine);
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.set('view', ReactEngine.expressView);

app.use(express.static(join(__dirname, 'public')));

// add our app routes
app.get('/resume', (req, res) => {
    res.render(req.url, {
        projects: projects
    });
});

app.get('/', (req, res) => {
   res.render(req.url, null); 
});

app.use(function(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }

    if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_NOT_FOUND) {
        return res.status(404).send('Route Not Found!');
    }
    else {
        return res.status(500).send(err.message);
    }
});

app.listen(1337);
