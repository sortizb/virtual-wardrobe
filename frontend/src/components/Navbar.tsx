import logoPlaceHolder from '../assets/favicon.png';
import menuIcon from '../assets/menu.png';
import avatarIcon from '../assets/user.png';
import { AppBar, Container, Toolbar, Typography, Box, Avatar, IconButton, Menu, MenuItem, Button } from '@mui/material';

import useNavbarState from '../hooks/Navbar';

function Navbar() {

    const pages = ["Closet", "Outfits", "Add"];
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
                                <Typography className='font-dmsans'>{page}</Typography>
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
                            <Button
                            key={page}
                            className='font-dmsans text-black normal-case text-xl'
                            >{page}</Button>
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