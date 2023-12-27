import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Stack, InputAdornment, Grid, ListItemIcon, MenuItem, Menu, Typography, Box, Button, Divider, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Get_Categories, Get_Customer } from '@/graphql/Query';
import logoImage from "../../images/logo1.png"
import Image from 'next/image';

const Header = () => {
    const { data: categoryData, loading: categoryLoading } = useQuery(Get_Categories)
    const { data } = useQuery(Get_Customer)
    const [navItems, setNav] = useState()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const router = useRouter()
    useEffect(()=>{
        localStorage.setItem('category',categoryData)
    },categoryData)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box
            sx={{
                backgroundColor: '#FFFFFF', borderBottom: '1px solid #C4C4C4', pb: '16.5px'
            }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, backgroundColor: '#F5F8FB' }} gap={2} justifyContent={'center'} alignItems={'center'}>
                <Typography color="#17468F" fontSize='12px'>
                    FREE SHIPPING AVAILABLE
                </Typography>
                <LocalShippingOutlinedIcon sx={{ color: '#17468F' }} />
                <Typography color='#2B3445' fontSize='12px'>
                    WITH PURCHASE OVER CHF 35 BEFORE TAXES; CONNECT TO SEE YOUR PERSONAL BENEFITS
                </Typography>
            </Box>
            <Grid px={{ md: '90px', xs: 0 }} alignItems={"center"} mt={4} container gap={1} justifyContent={'space-between'}>
                <Button sx={{ display: { xs: 'block', md: 'none' } }} >
                    <MenuIcon fontSize='large' />
                </Button>
                <Image onClick={() => { router.push('dashboard') }} className='img' width={200} height={40} src={logoImage} />
                <Grid md={4}>
                    <TextField label="search" size='small' sx={{ display: { xs: 'none', md: 'flex' }}}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    >
                    </TextField>
                </Grid>
                <Box justifyContent='space-between' sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Button sx={{
                        '&:hover': {
                            backgroundColor: '#fff',
                            boxShadow: 'none',
                        },
                        textTransform: 'none',
                        font: 'normal 15px/24px',
                        color: '#2B3445'
                    }} startIcon={<CompareArrowsOutlinedIcon />}>
                        Compare
                    </Button>

                    <Button sx={{
                        '&:hover': {
                            backgroundColor: '#fff',
                            boxShadow: 'none',
                        },
                        textTransform: 'none',
                        ml: '10px', color: '#2B3445',
                        font: 'normal 15px/24px'
                    }} startIcon={<LocalMallOutlinedIcon />}>
                        Cart
                    </Button>

                    <Button
                    onClick={()=>router.push('/account/login')}
                    sx={{
                        '&:hover': {
                            backgroundColor: '#fff',
                            boxShadow: 'none',
                        }, ml: '10px', color: '#2B3445', textTransform: 'none',
                        font: 'normal 15px/24px'
                    }}
                        onMouseDown={(e) => handleClose(e)}
                        onMouseOver={(e) => handleClick(e)} startIcon={<PermIdentityOutlinedIcon />}>
                        {data?.customer ? data?.customer.firstname : "Sign In"
                        }
                    </Button>

                </Box>
                <Box alignItems='center' justifyContent='space-between' sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <Button>
                        <SearchIcon />
                    </Button>
                    <Button>
                        <CompareArrowsOutlinedIcon />
                    </Button>
                    <Button >
                        <PermIdentityOutlinedIcon />
                    </Button>
                    <Button>
                        <LocalMallOutlinedIcon />
                    </Button>

                </Box>
            </Grid>


            {data?.customer ?
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={() => (handleClose, router.push('/my-account/dashboard'))}>
                        <ListItemIcon>
                            <SpaceDashboardOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        My Dashboard
                    </MenuItem>
                    <MenuItem onClick={() => (handleClose, router.push('/my-account/orders'))}>
                        <ListItemIcon>
                            <ShoppingBagOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        My Orders
                    </MenuItem>
                    <MenuItem onClick={() => (handleClose, router.push('/my-account/addresses'))}>
                        <ListItemIcon>
                            <FmdGoodIcon fontSize="small" />
                        </ListItemIcon>
                        Addresses
                    </MenuItem>
                    <MenuItem onClick={() => (handleClose, router.push('/my-account/wishlist'))}>
                        <ListItemIcon>
                            <FavoriteBorderIcon fontSize="small" />
                        </ListItemIcon>
                        My Wishlist
                    </MenuItem>
                    <MenuItem onClick={() => (handleClose, router.push('/my-account/profile-information'))}>
                        <ListItemIcon>
                            <PermIdentityIcon />
                        </ListItemIcon>
                        Profile Information
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => (handleClose, router.push('/my-account/logout'))}>
                        <ListItemIcon>
                            <LogoutIcon fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
                :
                <></>
            }

            <Stack px={{ md: '90px', xs: 0 }} sx={{ mt: '30px', display: { xs: 'none', md: 'flex' } }}
                direction='row'
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}>
                {categoryData?.categories.items && categoryData?.categories.items.map((item) => (
                    <Button letterSpacing={'var(--unnamed-character-spacing-0)'} key={item} sx={{
                        '&:hover': {
                            backgroundColor: '#fff',
                            boxShadow: 'none',
                        }, height: '21px', color: '#2B3445',
                        font: 'normal normal normal 15px/23px Poppins',
                        textTransform: 'none'
                    }} endIcon={item.children_count > 0 ? <KeyboardArrowDownOutlinedIcon /> : <></>}>
                        {item.name}
                    </Button>
                ))}
            </Stack>
        </Box>



    );
}
export default Header;
