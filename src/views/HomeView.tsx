import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

export default function HomeView() {
  return (
    <>
        <Header />

        <main className="bg-gray-100 py-10 min-h-screen bg-no-repeat bg-right-top lg:bg-home lg:bg-home-xl"
        style={{
            backgroundImage: 'url("/img/bg2.jpg")',
            backgroundPosition: "center center",
            backgroundRepeat:"no-repeat",
            backgroundSize: "cover"
            
          }}>

            <div className=" max-w-5xl mx-auto mt-10"
             style={{
                position:"relative"
             }}>
                <div className="lg:w-1/2 px-10 lg:p-0 space-y-6 z-40" style={{position:"inherit"}}>
                    <h1 className="text-violet-100 text-6xl font-black">
                        Todas tus <span className="text-purple-700">Redes Sociales </span>
                        en un enlace
                    </h1>

                    <p className="text-white text-xl">Únete a más de 200 mil developers compartiendo sus redes sociales, comparte tu perfil de TikTok, Facebook, Instagram, YouTube, Github y más</p>

                    <SearchForm />
                </div>
                
                <div className="overlay" 
                    style={{
                        position:"absolute",
                        top:"-20px",
                        bottom:"-30px",
                        right:"480px",
                        left:"-20px",
                        backgroundColor:"rgba(0,0,0,0.2)"
                    }}>

                </div>
            </div>
        </main>
    </>
  )
}
