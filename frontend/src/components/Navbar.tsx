import logoPlaceHolder from '../assets/favicon.png';
import menuIcon from '../assets/menu.png';
import avatarIcon from '../assets/user.png';

export default function Navbar() {

    return (
        <nav id="nav_container" className="m-1.5 p-3 w-[99%] h-[60px] border-b-2 border-gray-200 rounded-lg shadow-md flex flex-row justify-between items-center
                                            md:h-[70px] lg:h-[80px] lg:gap-5">
            <span id="logo_container" className="h-full flex items-center w-fit">
                <img src={logoPlaceHolder} className="h-full object-fill"/>
            </span>
            <span id="name_container" className="h-full flex justify-center items-center text-lg font-semibold italic md:text-2xl lg:text-4xl lg:w-fit lg:justify-normal">
                StyleAI
            </span>
            <span id="options_container" className="pr-30 h-full w-full aspect-square items-center justify-center hidden lg:flex">
                <li id="options_list" className="gap-5 text-xl flex">
                    <ul className="text-purple-700 font-semibold">Closet</ul>
                    <ul>Outfits</ul>
                    <ul>Add</ul>
                </li>
            </span>
            <span className="h-full">
                <span id="burguer_menu_container" className="lg:hidden">
                    <img src={menuIcon} className="h-full object-fill"/>
                </span>
                <span id="avatar_container" className="invisible lg:visible">
                    <img src={avatarIcon} className="w-fit h-full border-3 rounded-full aspect-square object-fill"/>
                </span>
            </span>
        </nav>
    )
}