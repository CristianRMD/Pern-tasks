import express from 'express';
import morgan from 'morgan';
import taskRoutes from './routes/tasks.routes.js';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
const app = express();

//midelwares

app.use(cookieParser());
//permite que se vea en consola las peticiones que se hacen al servidor
app.use(morgan('dev'));
//permite que se pueda recibir datos en formato json
app.use(express.json());
//permite que se pueda recibir datos en formato urlencoded
app.use(express.urlencoded({ extended: false }));

//ruta inicial
app.get('/', (req, res) => res.json({ message: 'Hello, world!' }));
//rutas añadidas al app

app.use('/api',taskRoutes);
app.use('/api',authRoutes);

app.get('/', (req, res) => res.json({ message: 'Hello, world!' }));

//middleware para manejar errores
app.use((err,req, res, next)=>{
res.status(500).json({message: err.message,status :"error"});
});


export default app;