import express from 'express';
import morgan from 'morgan';

const app = express();
//permite que se vea en consola las peticiones que se hacen al servidor
app.use(morgan('dev'));
//permite que se pueda recibir datos en formato json
app.use(express.json());
//permite que se pueda recibir datos en formato urlencoded
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => res.json({ message: 'Hello, world!' }));

app.get('/test', (req, res) =>{
    throw new Error('Test error');
    res.send('Test route');

} )

app.use((err,req, res, next)=>{
res.status(500).json({message: err.message,status :"error"});
});


export default app;