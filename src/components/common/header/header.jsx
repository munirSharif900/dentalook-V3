import { Link } from "react-router-dom";
import { useState } from "react";
import { HeaderLogo, Profile } from "../../../assets/images";
import { DoubleArrowIcon, HeaderTroggleIcon, NotificationIcon, SearchIcon } from "../../../assets/icon";


export default function Header({ onMobileToggle }) {
    const [open, setOpen] = useState(false);
    return (
        <header className="bg-white w-full z-99 py-3 md:py-5 px-3 border-b border-[#E2E8F0] md:px-4 flex  justify-between">

            <div className="flex items-center gap-4 md:gap-25">
                <button
                    onClick={onMobileToggle}
                    className="md:hidden cursor-pointer"
                ><HeaderTroggleIcon /></button>
                <Link to={`/`}>
                    <img src={HeaderLogo} alt="logo" width={140} height={30} />
                </Link>
                <div className="hidden md:flex items-center gap-5 py-3 px-6 border-none bg-[#F9FBFC] rounded-lg">
                    <span><SearchIcon /></span>
                    <input type="text" placeholder="search" className="text-[#809FB8] text-base outline-none" />
                </div>
            </div>

            <div className="flex justify-center items-center gap-2 md:gap-8">
                <span className="cursor-pointer" ><NotificationIcon /></span>
                <div className="relative inline-block text-left">
                    <button onClick={() => setOpen(!open)} className="flex justify-center items-center gap-3 cursor-pointer  focus:outline-none hover:bg-gray-100 rounded-lg">
                        <img src={Profile} alt="profile" width={50} height={50} />
                        <div className="text-start hidden md:grid">
                            <h2 className="text-[#17181A]  text-lg font-semibold ">Mahmoud Tayyem</h2>
                            <span className="text-[#809FB8]  text-[15px] font-semibold">Admin</span>
                        </div>
                        <div className="hidden md:block">
                            <span><DoubleArrowIcon /></span>
                        </div>
                    </button>
                    {open && (
                        <div className="absolute z-100 right-0 mt-3 w-50 rounded-xl bg-white shadow-lg border border-[#809FB8]">
                            <ul className="py-2">
                                <li>
                                    <Link
                                        to="#"
                                        className=" px-4 py-2 grid text-sm hover:bg-gray-100"
                                    >
                                        <span className="text-sm font-medium text-gray-900"> Mahmoud Tayyem</span>
                                        <span className="text-xs text-gray-500">Admin</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        <span>My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                    >
                                        Sign out
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

        </header>
    )
}