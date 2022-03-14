import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import {MyTextInput} from '../components'
import '../styles/styles.css'
export const RegisterFormikPage = () => {


    return (
    <div>
        <h1>Register Formik Page</h1>
        <Formik
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                                .min(2, "Debe tener mas de 2 caracteres")
                                .max(15, "Debe tener menos de 15 caracteres")
                                .required('Requerido'),
                    email: Yup.string()
                                .email('Debe ser un formato de email valido')
                                .required('Requerido'),
                    password1: Yup.string()
                                    .min(6, 'Debe tener mas de 6 caracteres')
                                    .required('Requerido'),
                    password2: Yup.string()
                                    // .min(6, 'Debe tener mas de 6 caracteres')
                                    .required('Requerido')
                                    .oneOf([Yup.ref('password1'), null], 'Passwords deben coincidir')
                })
            }
        >
            {
                ({handleReset}) => (
                    <Form>
                        <MyTextInput label="Name" name='name' placeholder="Name"  />
                        <MyTextInput label="Email Address" name='email' placeholder="Email" type='email'  />
                        <MyTextInput label="Password" name='password1' placeholder="Password" type='password'  />
                        <MyTextInput label="Confirm Password" name='password2' placeholder="ConfirmPassword" type='password'  />


                        <button type='submit'>Submit</button>
                        <button onClick={handleReset}>Reset Form</button>
                    </Form>
                )
            }
        </Formik>
    </div>
    )
}
