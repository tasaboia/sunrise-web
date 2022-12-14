import { Formik } from 'formik'
import React , {useState} from 'react'
import logo from "../../assets/sunrise-logo.svg"
import { Link } from 'react-router-dom'
import { UIButton } from '../../components/UIButton'
import UIInput from '../../components/UIInput'
import { initialValues, SignupSchema } from './validation'
import styles from './login.module.css'
import { useAuth } from '../../context'
import 'animate.css';

export default function Login() {
   const { login } = useAuth()
  
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={SignupSchema}
    onSubmit={values => {
        login({email: values.email, password: values.password, returnSecureToken: true,})
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
    <div className={styles.screen}>
        <div className={`${styles.logo} animate__fadeIn`}>
            <img className={styles.icon} src={logo} alt="Logo Sunrise church"/>
        </div>
        <div  className={styles.login__container} >
            <div className={styles.login}>
                <h1 className={styles.title}>Login</h1>
                {/* {status.open ? <Status label={status.label} state={status.state} /> : null} */}
                <UIInput 
                    placeholder='E-mail' 
                    onChange={handleChange('email')} 
                    onBlur={handleBlur('email')} 
                    value={values.email} icon='email'
                />
                {errors.email ? (<div className={styles.error}>{errors.email}</div>) : null} 
                <UIInput 
                    placeholder='Password' 
                    onChange={handleChange('password')} 
                    onBlur={handleBlur('password')} 
                    value={values.password} 
                    icon='password'
                />
                {errors.password ? (<div className={styles.error}>{errors.password}</div>) : null} 
                <UIButton type="submit" onClick={() => handleSubmit ()}>Entrar</UIButton>
                
            </div>
            <div className={styles.row}>
                <h5>N??o possui uma conta?</h5>
                <Link className={styles.link} to="/register"> Criar conta</Link>
            </div>
        </div>
    </div>
    )}</Formik>
  )
}
