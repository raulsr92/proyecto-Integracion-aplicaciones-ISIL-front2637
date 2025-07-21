
type  Button1Props = {
    content: string
}

function ButtonModel({content}: Button1Props) {

    return(
        <>
            <input
                type="submit"
                className="bg-violet-700 hover:bg-violet-900 p-3 text-lg w-full uppercase text-white rounded-lg font-bold cursor-pointer"
                value= {content}
        />
        </>
    )
    
}

export default ButtonModel