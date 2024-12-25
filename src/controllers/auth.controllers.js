import {pool} from '../db.js'
import bcrypt from 'bcryptjs'
export const signin = (req, res) => res.send('Ingresando')

export const signup = async (req, res) => {

 try{
    const {username, email, password} = req.body
    
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
    
    const result = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) returning *', [username, email, hashedPassword],)
    console.log(result.rows[0])
    res.send(result.rows[0]);
    
 } catch (error) {
if (error.code === '23505') {
    res.status(400).send('El usuario ya existe')
 }   
}}

export const signout = (req, res) => res.send('Saliendo')
export const profile = (req, res) => res.send('Perfil')