import logoPlaceHolder from '../assets/favicon.png';
import menuIcon from '../assets/menu.png';
import avatarIcon from '../assets/user.png';
import closeIcon from '../assets/close.png';

import { hideMobileOptions, logout, showMobileOptions, switchTo } from '../controllers/Navbar';

export default function Navbar() {

    return (
        <>
            <nav id="nav_container" className="m-1.5 p-3 w-[99%] h-[60px] border-b-2 border-gray-200 rounded-lg shadow-md flex flex-row justify-between items-center
                                                md:h-[70px] lg:h-[80px] lg:gap-5">
                <span id="logo_container" className="h-full flex items-center w-fit">
                    <img src={logoPlaceHolder} className="h-full object-fill hover:cursor-pointer" onClick={switchTo} data-target="home"/>
                </span>
                <span id="name_container" className="pt-5 h-full flex text-lg font-borel italic text-primary justify-center items-center md:text-2xl 
                                                    lg:text-3xl lg:w-fit lg:justify-normal hover:cursor-pointer" onClick={switchTo} data-target="home">
                    StyleAI
                </span>
                <span id="options_container" className="pr-30 h-full w-full items-center justify-center hidden lg:flex">
                    <li id="options_list" className="gap-5 flex font-dmsans text-2xl">
                        <ul className="text-primary font-semibold hover:cursor-pointer hover:text-shadow-sm hover:transition-all"
                        onClick={switchTo} data-target="closet">Closet</ul>
                        <ul className="hover:cursor-pointer hover:text-shadow-sm hover:transition-all" onClick={switchTo} data-target="outfits">Outfits</ul>
                        <ul className="hover:cursor-pointer hover:text-shadow-sm hover:transition-all" onClick={switchTo} data-target="add">Add</ul>
                    </li>
                </span>
                <span className="h-full">
                    <span id="burguer_menu_container" className="lg:hidden">
                        <img src={menuIcon} className="h-full object-fill hover:cursor-pointer" onClick={showMobileOptions}/>
                    </span>
                    <span id="avatar_container" className="invisible lg:visible">
                        <img src={avatarIcon} className="h-full object-contain hover:cursor-pointer" onClick={switchTo} data-target="profile"/>
                    </span>
                </span>
            </nav>

            <div id="mobile_options" className="invisible h-screen w-screen fixed flex flex-row-reverse">
                <div className="h-full w-full bg-gray-800 opacity-50" onClick={hideMobileOptions}/>
                <div className="h-fit w-fit min-w-1/2 bg-white fixed">
                    <li className="gap-3 h-full flex flex-col font-dmsans">
                        <ul className="flex flex-row-reverse">
                            <img src={closeIcon} className="pt-1 pr-1 max-h-5" onClick={hideMobileOptions}/>
                        </ul>
                        <ul className="pb-2 pl-1 hover:cursor-pointer">
                            <img src={avatarIcon} className="max-h-10 object-contain hover:cursor-pointer" onClick={switchTo} data-target="profile"/>
                        </ul>
                        <ul className="p-3 bg-gray-200 text-primary font-semibold hover:cursor-pointer hover:text-shadow-sm hover:transition-all"
                        onClick={switchTo} data-target="closet">Closet</ul>
                        <ul className="p-3 hover:cursor-pointer hover:text-shadow-sm hover:transition-all" onClick={switchTo} data-target="outfits">Outfits</ul>
                        <ul className="p-3 hover:cursor-pointer hover:text-shadow-sm hover:transition-all" onClick={switchTo} data-target="add">Add</ul>
                        <ul className="bg-primary p-3 hover:cursor-pointer hover:text-shadow-sm hover:transition-all">
                            <button onClick={logout}>Logout</button>
                        </ul>
                    </li>
                </div>
            </div>
        </>
    )
}