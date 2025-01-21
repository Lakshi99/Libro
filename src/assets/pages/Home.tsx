import Navbar from "../../compoment/Navbar"
import Slider from "../../compoment/Slider"
import { useNavigate } from 'react-router-dom';




function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col h-screen bg-gray-100">
                <Navbar />
                <div className="flex-1 flex">
                    <Slider />
                    <div className="flex-1 p-4">

                        <div >
                            <div className="bg-white p-4 rounded-md mt-4">
                                <h2 className="text-gray-500 text-lg font-semibold pb-4">Book list</h2>
                                <div className="my-1"></div>
                                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                                <table className="w-full table-auto text-sm">
                                    <thead>
                                        <tr className="text-sm leading-normal">
                                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Title</th>
                                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Description</th>
                                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Monto</th>
                                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-grey-lighter">
                                            <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                                            <td className="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                                            <td className="py-2 px-4 border-b border-grey-light text-right">$1500</td>
                                            <td className="py-2 px-4 border-b border-grey-light text-right">
                                                <button className="rounded-md bg-[#7863ee] py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg" type="button"
                                               onClick={() => navigate('/update/1')}
                                                >
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" id="_24x24_On_Light_Edit" data-name="24x24/On Light/Edit" xmlns="http://www.w3.org/2000/svg">
                                                        <rect id="view-box" width="24" height="24" fill="none" />
                                                        <path id="Shape" d="M.75,17.5A.751.751,0,0,1,0,16.75V12.569a.755.755,0,0,1,.22-.53L11.461.8a2.72,2.72,0,0,1,3.848,0L16.7,2.191a2.72,2.72,0,0,1,0,3.848L5.462,17.28a.747.747,0,0,1-.531.22ZM1.5,12.879V16h3.12l7.91-7.91L9.41,4.97ZM13.591,7.03l2.051-2.051a1.223,1.223,0,0,0,0-1.727L14.249,1.858a1.222,1.222,0,0,0-1.727,0L10.47,3.91Z" transform="translate(3.25 3.25)" fill="#141124" />
                                                    </svg>
                                                </button>

                                                <button className="rounded-md bg-[#ee6363] py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg" type="button"
                                                
                                                >
                                                    <svg className="w-4 h-4" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M20 18h2v16h-2z" /><path d="M24 18h2v16h-2z" /><path d="M28 18h2v16h-2z" /><path d="M12 12h26v2H12z" /><path d="M30 12h-2v-1c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v1h-2v-1c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3v1z" /><path d="M31 40H19c-1.6 0-3-1.3-3.2-2.9l-1.8-24 2-.2 1.8 24c0 .6.6 1.1 1.2 1.1h12c.6 0 1.1-.5 1.2-1.1l1.8-24 2 .2-1.8 24C34 38.7 32.6 40 31 40z" /></svg>
                                                </button>

                                            </td>

                                        </tr>
                                        <tr className="hover:bg-grey-lighter">
                                            <td className="py-2 px-4 border-b border-grey-light">Ana Torres</td>
                                            <td className="py-2 px-4 border-b border-grey-light">28/07/2023</td>
                                            <td className="py-2 px-4 border-b border-grey-light text-right">$1500</td>
                                            <td className="py-2 px-4 border-b border-grey-light text-right">
                                                <button className="rounded-md bg-[#7863ee] py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg" type="button"
                                                 onClick={() => navigate('/update/1')}
                                                >
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" id="_24x24_On_Light_Edit" data-name="24x24/On Light/Edit" xmlns="http://www.w3.org/2000/svg">
                                                        <rect id="view-box" width="24" height="24" fill="none" />
                                                        <path id="Shape" d="M.75,17.5A.751.751,0,0,1,0,16.75V12.569a.755.755,0,0,1,.22-.53L11.461.8a2.72,2.72,0,0,1,3.848,0L16.7,2.191a2.72,2.72,0,0,1,0,3.848L5.462,17.28a.747.747,0,0,1-.531.22ZM1.5,12.879V16h3.12l7.91-7.91L9.41,4.97ZM13.591,7.03l2.051-2.051a1.223,1.223,0,0,0,0-1.727L14.249,1.858a1.222,1.222,0,0,0-1.727,0L10.47,3.91Z" transform="translate(3.25 3.25)" fill="#141124" />
                                                    </svg>
                                                </button>

                                                <button className="rounded-md bg-[#ee6363] py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg" type="button">
                                                    <svg className="w-4 h-4" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M20 18h2v16h-2z" /><path d="M24 18h2v16h-2z" /><path d="M28 18h2v16h-2z" /><path d="M12 12h26v2H12z" /><path d="M30 12h-2v-1c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v1h-2v-1c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3v1z" /><path d="M31 40H19c-1.6 0-3-1.3-3.2-2.9l-1.8-24 2-.2 1.8 24c0 .6.6 1.1 1.2 1.1h12c.6 0 1.1-.5 1.2-1.1l1.8-24 2 .2-1.8 24C34 38.7 32.6 40 31 40z" /></svg>
                                                </button>

                                            </td>
                                        </tr>

                                    </tbody>
                                </table>


                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home
