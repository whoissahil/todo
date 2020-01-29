const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/db').dbUrl;

// Connect to Database
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true}, function (err, db) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('connected to ' + db);
            db.close();
        }
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

