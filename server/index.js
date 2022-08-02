const express = require("express");
var bodyparser = require("body-parser");
const sql = require("mssql");

const cors = require("cors");

const app = express();
app.use(bodyparser.urlencoded({ extended: false }))

app.use(cors());
app.use(express.json());




// config for your database
var config = {
    user: 'bharath',
    password: 'Flowerwash20',
    server: 'quiztask.database.windows.net',
    database: 'demodb',
    options: {
        database: 'demodb',
        trustServerCertificate: true
    }
};





sql.connect(config, function (err) {
    if (err) {
        console.log(err);
    }
});

app.get('/:category', (req, res) => {
    const category = req.params.category;
    console.log("category:", category);
    sql.query(`SELECT * FROM ${category}`, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result.recordset);
        }
    })
})

app.post("/result", (req, res) => {
    const name = req.body.name;
    const score = req.body.score;
    const category = req.body.category;
    sql.query(`INSERT INTO result(name,score,category) values ('${name}','${score}','${category}')`, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
        }
    })
})
const port = process.env.PORT || 1337;
app.listen(port);


console.log('Server is running..', PORT);
