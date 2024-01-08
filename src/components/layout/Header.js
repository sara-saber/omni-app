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
import { useQuery, useReadQuery } from '@apollo/client';
import { Get_Categories, Get_Customer } from '@/graphql/Query';
import logoImage from "../../images/logo1.png"
import Image from 'next/image';

const Header = (props) => {
    const { data: categoryData, loading: categoryLoading } = useQuery(Get_Categories)
    const { data } = useQuery(Get_Customer)
    const [navItems, setNav] = useState()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const router = useRouter()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box
            sx={{
                height:{md:182,xs:62},
                backgroundColor: '#FFFFFF', borderBottom: '2px solid #F5F5F5', pb: {md:'1.5px ',xs:'10px'}
            }}>
            <Box sx={{ height:32, display: { xs: 'none', md: 'flex' }, backgroundColor: '#F5F8FB' }} gap={3} justifyContent={'center'} alignItems={'center'}>
                <Typography color="#17468F" fontSize='12px'>
                    FREE SHIPPING AVAILABLE
                </Typography>
                <LocalShippingOutlinedIcon sx={{ color: '#17468F' }} />
                <Typography color='#2B3445' fontSize='12px'>
                    WITH PURCHASE OVER CHF 35 BEFORE TAXES; CONNECT TO SEE YOUR PERSONAL BENEFITS
                </Typography>
            </Box>
            <Grid px={{ md: '69px', xs: 0 }} alignItems={"center"} mt={{md:4,xs:'12px'}} container columnGap={0.2} justifyContent={'space-between'}>
                <Button sx={{
                    '.css-1waxiuw-MuiButtonBase-root-MuiButton-root': {
                        minWidth: 42
                    },
                    '.css-tzssek-MuiSvgIcon-root': {
                        color: '#2B3445'
                    },
                    display: { xs: 'block', md: 'none' }
                }} >
                    <MenuIcon fontSize='large' />
                </Button>
                <Image onClick={() => { router.push('dashboard') }} className='img' width={200} height={40} src={logoImage} />
                <Grid md={4.5}>
                    <TextField label="search" size='small' sx={{ display: { xs: 'none', md: 'flex' } }}
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
                       fontFamily:200,
                       fontSize:15,
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
                        fontSize:15,
                        ml: '10px', color: '#2B3445',
                    }} startIcon={<LocalMallOutlinedIcon />}>
                        Cart
                    </Button>

                    <Button
                        onClick={() => router.push('/account/login')}
                        sx={{
                            '&:hover': {
                                backgroundColor: '#fff',
                                boxShadow: 'none',
                            }, ml: '10px', color: '#2B3445', textTransform: 'none',
                            fontSize:15,
                        }}
                        onMouseDown={(e) => handleClose(e)}
                        onMouseOver={(e) => handleClick(e)} startIcon={<PermIdentityOutlinedIcon />}>
                        {data?.customer ? data?.customer.firstname : "Sign In"
                        }
                    </Button>

                </Box>
                <Box alignItems='center' justifyContent='space-between' sx={{
                    '.css-1e6y48t-MuiButtonBase-root-MuiButton-root': {
                        minWidth: 22
                    },
                    '.css-i4bv87-MuiSvgIcon-root': {
                        color: '#2B3445'
                    },
                    display: { xs: 'flex', md: 'none' },
                    '.css-1e6y48t-MuiButtonBase-root-MuiButton-root':{
                        padding:'5%',
                        minWidth:28
                    }
                }}>
                    <Button >
                        <SearchIcon />
                    </Button>
                    <Button>
                        <CompareArrowsOutlinedIcon />
                    </Button>
                    <Button>
                        <LocalMallOutlinedIcon />
                    </Button>
                    <Button >
                        <PermIdentityOutlinedIcon />
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

            <Stack px={{ md: '69px', xs: 0 }} sx={{ mt: '31px',mb:'22px', display: { xs: 'none', md: 'flex' } }}
                direction='row'
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}>
                {categoryData?.categories.items && categoryData?.categories.items.map((item) => (
                    <Button letterSpacing={'var(--unnamed-character-spacing-0)'} key={item} sx={{
                        '&:hover': {
                            backgroundColor: '#FFFF',
                            boxShadow: 'none',
                        }, height: '21px', color: '#2B3445',
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
