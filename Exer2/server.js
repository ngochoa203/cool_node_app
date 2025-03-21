const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const router = express.Router();

// Middleware: Logs request time
app.use((req, res, next) => {
    console.log('Request Time:', Date.now());
    next();
});

// Middleware: Session management
app.use(session({
    secret: 'some_secret_key',
    resave: false,
    saveUninitialized: true
}));

// Middleware: Body parser
app.use(bodyParser.json());

// Router middleware: Logs request time
router.use((req, res, next) => {
    console.log('Router Time:', Date.now());
    next();
});

// Routes
router.get('/home', (req, res) => {
    res.send('<h1>Hello World, This is Home Page</h1>');
});

router.get('/profile', (req, res) => {
    res.send('<h1>Hello World, This is Profile Page</h1>');
});

router.get('/login', (req, res) => {
    req.session.user = "Guest";
    res.send('<h1>Login successful</h1>');
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('<h1>Logout successful</h1>');
});

// Apply routes
app.use('/', router);

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).send('Something went wrong!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Web Server is listening at port ${PORT}`);
});
