import app from './app.js';
import {pool} from './db.js';

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.log(err,res.rows);
    } else {
        console.log('connected to the db');
        console.log(err,res.rows);

    }
});

app.listen(3000);
console.log('Server listening on port 3000');