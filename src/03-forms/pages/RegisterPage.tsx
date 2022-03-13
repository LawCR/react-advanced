import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'
export const RegisterPage = () => {

    const {formData, name, email, password1, password2, handleChange, resetForm, isValidEmail} = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })
    

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formData);
    }

    return (
    <div>
        <h1>Register Page</h1>
        <form noValidate onSubmit={(e) => handleSubmit(e)} >
            <input 
                type="text"
                name="name"
                placeholder='Name'
                value={name}
                onChange={ (e) => handleChange(e)}
                className={`${name.trim().length <= 0 && 'has-error'}`}
            />
            { name.trim().length <= 0 && <span>Este campo es necesario</span>}
            <input 
                type="email"
                name="email"
                placeholder='Email'
                value={email}
                onChange={handleChange}
                className={`${!isValidEmail(email) && 'has-error'}`}
            />
            { !isValidEmail(email) && <span>Email no es valido</span>}
            <input 
                type="password"
                name="password1"
                placeholder='Password'
                value={password1}
                onChange={handleChange}
            />
            { password1.trim().length <= 0 && <span>Este campo es necesario</span>}
            { password1.trim().length < 6 && password1.trim().length > 0  && <span>La contraseña debe ser mayor de 6 digitos</span>}
            <input 
                type="password"
                name="password2"
                placeholder='Repeat Password'
                value={password2}
                onChange={handleChange}
            />
            { password2.trim().length <= 0 && <span>Este campo es necesario</span>}
            { password2.trim().length > 0 && password1 !== password2 && <span>Los password deben coincidir</span>}
            <button type='submit'>Create</button>
            <button onClick={resetForm}>Reset Form</button>
        </form>
    </div>
    )
}
