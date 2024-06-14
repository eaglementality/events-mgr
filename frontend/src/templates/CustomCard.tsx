import noImage from "../assets/No Image.jpg"
export const CustomCard = () => {
    return (
        <div className="grid justify-center border rounded-lg shadow-lg w-[20rem] h">
             <img className="object-contain w-[20rem] h-[12rem] border-b-black border" src={noImage}/>
             <div className="flex justify-center border  p-4 space-x-8">
                <div >
                    <div className="text-zinc-500">{`SEP`}</div>
                    <div className="text-2xl font-bold">{`18`}</div>
                </div>
                <div>
                    <h5 className="mb-2 font-bold text-black">{`2011 Super junior SM Town Live '10 World Tour New City`}</h5>
                    <p className="text-zinc-500">{`Directly seated and inside for you to enjoy the show`}</p>
                </div>
            </div>   
          </div>
    )
}