import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'
import Logo from '../components/Logo'

export default function AuthLayout() {
  return (
    <>
        <div className='bg-slate-800 min-h-screen' 
          style={{
            backgroundImage: 'url("/img/bg2.jpg")',
            backgroundPosition: "center center",
            backgroundRepeat:"no-repeat",
            backgroundSize: "cover"
          }}>
            <div className='max-w-lg mx-auto pt-10 px-5'>
                <Logo />

                <div className='py-10'>
                    <Outlet />
                </div>
            </div>
        </div>

        <Toaster position='top-right' />
    </>
  )
}
