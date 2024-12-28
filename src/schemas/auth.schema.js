import {z} from 'zod';
export const signupSchema = z.object({
username:z.string({
    required_error: 'Username is required',
    invalid_type_error: 'el nombre debe ser un texto',

}).min(1).max(255),
email:z.string({
    required_error: 'Email is required',
    invalid_type_error: 'el email debe ser un texto',
}).email({
    message: 'Invalid email format'
}),
password:z.string({
    required_error: 'Password is required',
    invalid_type_error: 'la contraseña debe ser un texto',
}).min(6).max(255),
})


export const signinSchema = z.object({
    email:z.string({
        required_error: 'Email is required',
        invalid_type_error: 'el email debe ser un texto',
    }).email({
        message: 'Invalid email format'
    }),
    password:z.string({
        required_error: 'Password is required',
        invalid_type_error: 'la contraseña debe ser un texto',
    }).min(6,{
        message: 'Password must be at least 6 characters long'
    }).max(255,{
        message: 'Password must be at most 255 characters long'
    }),
    })
    


