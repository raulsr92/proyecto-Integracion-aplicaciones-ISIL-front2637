import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { isAxiosError } from 'axios'
import ErrorMessage from '../components/ErrorMessage'
import ButtonModel1 from '../components/ButtonModel1'
import { LoginForm } from '../types'
import api from '../config/axios'
/*import useState from React at the top of the file*/
import { useState } from 'react';

export default function LoginView() {
  const navigate = useNavigate()
  const initialValues: LoginForm = {
    email: '',
    password: ''
  }

  const[tipoInput, setTipoInput] = useState(true)

  function cambiarTipo(): void {
       if (tipoInput===false) {
            setTipoInput(true)

       } else{
            setTipoInput(false)
       }
    }

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

  const handleLogin = async (formData: LoginForm) => {
    try {
      const { data } = await api.post(`/auth/login`, formData)
      localStorage.setItem('AUTH_TOKEN', data)
      navigate('/admin')
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        toast.error(error.response.data.error)
      }
    }
  }

  return (
    <>
      <h1 className='text-4xl text-yellow-200 font-bold'>Iniciar Sesión</h1>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10 shadow-lg/60 shadow-violet-950"
        noValidate 
        style={{
          boxShadow: "0px 0px 40px 2px #7008e7"
        }}
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("email", {
              required: "El Email es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },
            })}
          />
          {errors.email && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          )}
        </div>
        <div className="grid grid-cols-1 space-y-3"
                style={{
                    position: "relative"
                }}
        >
          <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
          <input
            id="password"
            type={tipoInput?"password":"text"}
            placeholder="Password de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password", {
              required: "El Password es obligatorio",
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}

          <a className='eyeContent' 
                    style={{
                        position: "absolute",
                        right: "10px",
                        bottom: "12px",
                        cursor: "pointer"
                    }}
                    onClick={cambiarTipo}
                    >
                        <i className={tipoInput?"fa-solid fa-eye":"fa-solid fa-eye-slash"}
                        style={{
                            color: "#6d28d9"
                        }}></i>
            </a>
        </div>

        <ButtonModel1 content={"Iniciar Sesión"} />
        {/*
        <input
          type="submit"
          className="bg-violet-700 hover:bg-violet-900 p-3 text-lg w-full uppercase text-white rounded-lg font-bold cursor-pointer"
          value='Iniciar Sesión'
        />
        */ }
      </form>


      <nav className='mt-10'>
        <Link
          className='text-center text-white text-lg block'
          to="/auth/register"
        >¿No tienes cuenta? <span className='text-amber-200'>Crea una aquí</span> </Link>
      </nav>
    </>
  )
}
