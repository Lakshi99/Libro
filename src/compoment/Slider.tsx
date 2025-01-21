

function Slider() {
    return (
        <>
            <div className="p-2 bg-white w-60 flex flex-col hidden md:flex" id="sideNav">
                <nav>
                    <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white" href="/">
                        <i className="fas fa-home mr-2"></i>Home
                    </a>
                    <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white" href="/addnew">
                        <i className="fas fa-file-alt mr-2"></i>Add new 
                    </a>
                  
                </nav>


            </div>
        </>
    )
}

export default Slider
