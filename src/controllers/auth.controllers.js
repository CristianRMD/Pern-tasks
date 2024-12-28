import {pool} from '../db.js'
import bcrypt from 'bcryptjs'
import  md5 from 'md5'
import { createAccessToken } from '../libs/jwt.js'

export const signin = async(req, res) => {
   const {email,password} = req.body
   const result = await pool.query('SELECT * FROM users WHERE email = $1',[email])
   if (result.rowCount === 0) {
       return res.status(400).json({message: 'El CORREO no esta registrado'})
   }
   
   const validate = await bcrypt.compare(password, result.rows[0].password)
   if (!validate) {
       return res.status(400).send('Contraseña incorrecta')
   }

   const token = await createAccessToken({id: result.rows[0].id})
   res.cookie('token', token, {
        // httpOnly: true,
        secure: true,
         sameSite: 'none',
         maxAge: 1000 * 60 * 60 * 24
   })
   return res.json(result.rows[0])
}

export const signup = async (req, res) => {

 try{
    const {username, email, password} = req.body
    
    const hashedPassword = await bcrypt.hash(password, 10)
      const gravatar = `https://www.gravatar.com/avatar/${md5(email)}`;
    const result = await pool.query('INSERT INTO users (username, email, password,gravatar) VALUES ($1, $2, $3, $4) returning *', [username, email, hashedPassword,gravatar],)
   console.log(result.rows[0])
  //  res.send(result.rows[0]);
    const token = await createAccessToken({id: result.rows[0].id})

   res.cookie('token', token,{
        // httpOnly: true,
         secure : true,
        sameSite :'none',
         maxAge: 1000 * 60 * 60*24,
   })

   return res.json(result.rows[0])
 
} catch (error) {
if (error.code === '23505') {
      console.log("hay error")
    return res.status(400).send('El usuario ya existe')
 }   
}}

export const signout = (req, res) => {
      res.clearCookie('token')
      return res.send('Sesion cerrada')
}
export const profile = async(req, res) => {
const result = await pool.query('SELECT * FROM users WHERE id = $1', [req.userId])
return res.json(result.rows[0])
}