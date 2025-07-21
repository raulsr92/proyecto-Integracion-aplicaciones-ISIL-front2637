import { Link } from 'react-router-dom'

export default function HomeNavigation() {
  return (
    <>
        <Link
            className='text-white p-2 uppercase font-black text-xs cursor-pointer hover:text-yellow-200'
            to='/auth/login'
        >Iniciar Sesión</Link>
    
        <Link
            className='bg-violet-600 text-white hover:bg-violet-400 hover:text-violet-800 p-2 uppercase font-black text-xs cursor-pointer rounded-lg'
            to='/auth/register'
        >Registrarme</Link>
    </>
  )
}
