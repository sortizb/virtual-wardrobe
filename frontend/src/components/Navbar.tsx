import logoPlaceHolder from '../assets/favicon.png';
import menuIcon from '../assets/menu.png';
import avatarIcon from '../assets/user.png';
import { AppBar, Container, Toolbar, Typography, Box, Avatar, IconButton, Menu, MenuItem, Button } from '@mui/material';
import { Link } from 'react-router';

import useNavbarState from '../hooks/Navbar';

interface NavbarProps {
    currentPage: "closet" | "outfits" | "add" | "other";
}

function Navbar({currentPage}: NavbarProps) {

    const pages = ["closet", "outfits", "add"];
    const userSettings = ["My Profile", "Preferences", "Logout"];
    const { anchorElNavMenu, anchorElUserMenu, handleOpenNavMenu, handleCloseNavMenu, handleOpenUserMenu, handleCloseUserMenu} = useNavbarState();

    return (
        <AppBar id="navbar" component='nav' className='bg-white border-b-gray-500 rounded2xl shadow-md'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters className='gap-1 flex-auto grow shrink items-center justify-between'>
                    <IconButton 
                    size='small'
                    color='inherit'
                    onClick={handleOpenNavMenu}
                    className='md:hidden'
                    >
                        <img src={menuIcon} alt='menu' className='max-h-8'/>
                    </IconButton>
                    <Menu
                    anchorEl={anchorElNavMenu}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNavMenu)}
                    onClose={handleCloseNavMenu}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Link to={`/user/${page}`}>
                                    <Typography
                                    className={`font-dmsans capitalize ${(page === currentPage) ? 'text-primary underline underline-offset-2' : 'text-black'}`}
                                    >
                                        {page}
                                    </Typography>
                                </Link>
                            </MenuItem>
                        ))}

                    </Menu>
                    <Box className='flex gap-1 hover:cursor-pointer'>
                        <img src={logoPlaceHolder} alt='logo' className='p-0.5 max-h-10'/>
                        <Typography
                        variant='h5'
                        className='text-primary font-borel italic pt-3 font-semibold'
                        >
                        StyleAI
                        </Typography>
                    </Box>
                    <Box className='hidden md:flex items-center'>
                        {pages.map((page) => (
                            <Link to={`/user/${page}`} key={page}>
                                <Button
                                className={`font-dmsans capitalize text-xl ${(page === currentPage) ? 'text-primary underline underline-offset-2' : 'text-black'}`}
                                >{page}</Button>
                            </Link>
                        ))}
                    </Box>
                    <IconButton onClick={handleOpenUserMenu}>
                        <Avatar alt='Profile Picture' src={avatarIcon}/>
                    </IconButton>
                    <Menu
                    anchorEl={anchorElUserMenu}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElUserMenu)}
                    onClose={handleCloseUserMenu}
                    >
                        {userSettings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography className='font-dmsans'>{setting}</Typography>
                            </MenuItem>
                        ))}

                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;