import libroImage from "../assets/Images/libro.png"; 

function Navbar() {
    return (
        <>
            <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="hidden md:flex items-center">
                        <img src={libroImage} alt="Logo" className="w-20 h-20 mr-2" />
                        <h2 className="font-bold text-xl">Title</h2>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button id="menuBtn">
                            <i className="fas fa-bars text-gray-500 text-lg"></i>
                        </button>
                    </div>
                </div>


                <div className="space-x-5">
                    <button>
                        <i className="fas fa-bell text-gray-500 text-lg"></i>
                    </button>

                    <button>
                        <i className="fas fa-user text-gray-500 text-lg"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar
