const express = require('express');
const bodyParser = require('body-parser');
const express_session = require('express-session');
const cors = require('cors');
const config = require('./database/config/config.js');
const passport = require('./middlewares/passport');
const routes = require('./routes/Routes.js')
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require("./docs/openapi.js");


const app = express();
const sessionOptions = {
    secret: "my top secret key",
    resave: false,
    saveUninitialized: true,
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express_session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname+ '/public'));


app.get("/docs/swagger.json", (req, res) => res.json(swaggerSpec));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use('/', routes);

app.listen(8080, function(){console.log(`App running on http://localhost:8080`)})