import { useQueryClient } from '@tanstack/react-query'

export default function AdminNavigation() {
    const queryClient = useQueryClient()

    const logout = () => {
        localStorage.removeItem('AUTH_TOKEN')
        queryClient.invalidateQueries({queryKey: ['user']})
    }
    return (
        <button
            className=" bg-violet-600 text-white hover:bg-violet-400 hover:text-violet-800 p-2  uppercase font-black text-xs rounded-lg cursor-pointer"
            onClick={logout}
        >
            Cerrar Sesión
        </button>
    )
}
