import menuIcon from '../assets/menu.png'

export default function Navbar() {

    return (
        <>
            <nav id="nav_container" className="aspect-auto w-full h-fit min-h-fit flex flex-row justify-stretch p-2 border-b border-gray-300">
                <div id='logo_container' className='text-lg w-full h-fit md:text-2xl'>
                    Virtual Wardrobe
                </div>
                <div id='navbar_menu_icon' className='max-h-fit md:hidden'>
                    <img src={menuIcon}></img>
                </div>
                <div className='bg-white flex flex-col fixed right-0 h-screen w-fit min-w-1/3 gap-3'>
                    <span className='p-0.5 pr-1/3 border-b'>My Profile</span>
                    <button className='p-0.5 pr-1/3 border-b'>Closet</button>
                    <button className='p-0.5 pr-1/3 border-b'>Outfits</button>
                    <button className='p-0.5 pr-1/3 border-b'>Suggestions</button>
                    <button className='p-0.5 pr-1/3 border-b'>Profile</button>
                </div>
                <div id='navbar_options' className='hidden md:flex flex-row gap-5 text-xl'>
                    <button>Closet</button>
                    <button>Outfits</button>
                    <button>Suggestions</button>
                    <button>Profile</button>
                </div>
            </nav>
        </>
    )
}