export function FormSearch(){
    return(
        <form className="flex gap-4">
            <input className="cursor-pointer w-full outline-none text-xl font-medium rounded-md border border-gray-300 px-3 py-2 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter your city.." maxLength={32}/>
            <button className="cursor-pointer font-medium w-fit rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">Search</button>
        </form>
    )
}