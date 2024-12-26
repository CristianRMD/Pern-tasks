import {pool} from '../db.js';


export const getAllTasks = async (req, res,next) => {
    console.log(req.userId);
        const result = await  pool.query('SELECT * FROM tasks');
        res.status(200).json(result.rows);
}



export const getTask = async(req, res) => {
    const {id}= req.params;
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    if (result.rows.length === 0) {
        return res.Sendstatus(400).json({message  :"no existe tarea con ese id"});
    }
    res.json(result.rows[0]);
}


export const createTask = async (req, res,next) => {
const {title , description} = req.body;
try {
    const result = await pool.query('INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *', 
        [title, description]);
    
       res.json(result.rows[0]);
} catch (error) {
    console.log(error);
    if (error.code === '23505') {
        return res.status(400).json('Ya existe una tarea con ese titulo');
    }
    next(error);
}
}

export const updateTask = async(req, res) => {
    const {id} = req.params;
    const {title, description} = req.body;
    console.log(id,title,description);
    const result = await pool.query('UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *', 
        [title, description, id]);
    
        if(result.rowCount === 0){
            return res.status(400).json({message: 'No existe tarea con ese id'});
        }
    return res.json(result.rows[0]);
}


export const deleteTask = async(req, res) => {

    const {id} = req.params;
    const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    
    if (result.rowCount === 0) {
        return res.status(400).json({message: 'No existe tarea con ese id'});
    }
    res.status(204).json('Tarea eliminada');

}
