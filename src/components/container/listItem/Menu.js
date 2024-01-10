import { Box, Grid, Typography } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Get_Customer } from '@/graphql/Query';
const Menu = () => {
    const [name, setName] = useState()
    const { data } = useQuery(Get_Customer)
    const [selectedIndex, setSelectedIndex] = useState(1);
    const router = useRouter()
    const [textColor, setTextColor] = useState("#2B3445")
    const deleteToken = () => {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 2023 00:00:00 GMT; path=/;";
        }
        console.log(document.cookies);
    }
    const handleClick = () => {
        setTextColor('#17468F')
        console.log(textColor);
    };
    return (
        <Grid xs={12} md={12} lg={3} order={{ md: 2, xs: 3 }}>
            <Grid sx={{ display: { md: 'inline', xs: 'none' } }} xs={12} md={12} order={{ md: 1, xs: 1 }}>
                <Typography fontSize={20} fontWeight={700}>Hi, {data?.customer.firstname}!</Typography>
            </Grid>
            <Box mt={{ xs: 4, md: '15px' }} mb={8} pr={{ md: 2, xs: 0 }}>
                <ListItemButton
                    sx={{

                        '&:focus': {
                            color: textColor
                        }
                    }}
                    onClick={() => (router.push("/my-account/dashboard"), handleClick())}
                >
                    <ListItemIcon >
                        <SpaceDashboardOutlinedIcon sx={{
                            '&:focus': {
                                color: textColor
                            }
                        }} />
                    </ListItemIcon>
                    <ListItemText sx={{ margin: '10px 0' }} primary="My dashboard" />
                </ListItemButton>
                <Divider />
                <ListItemButton
                    sx={{
                        '&:focus': {
                            color: textColor
                        }
                    }}
                    onClick={() => router.push('/my-account/orders')}
                >
                    <ListItemIcon>
                        <ShoppingBagOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ margin: '10px 0' }} primary="My Orders" />
                </ListItemButton>
                <Divider />
                <ListItemButton
                    sx={{
                        '&:focus': {
                            color: textColor
                        }
                    }}
                    selected={selectedIndex === 2}
                    onClick={() => router.push('/my-account/addresses')}
                >
                    <ListItemIcon>
                        <FmdGoodIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ margin: '10px 0' }} primary="Addresses" />
                </ListItemButton>
                <Divider />
                <ListItemButton
                    sx={{
                        '&:focus': {
                            color: textColor
                        }
                    }}
                    selected={selectedIndex === 3}
                    onClick={() => router.push('/my-account/wishlist')}
                >
                    <ListItemIcon>
                        <FavoriteBorderIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ margin: '10px 0' }} primary="My wishlist" />
                </ListItemButton>
                <Divider />
                <ListItemButton
                    sx={{
                        '&:focus': {
                            color: textColor
                        }
                    }}
                    selected={selectedIndex === 4}
                    onClick={() => router.push('/my-account/profile-information')}
                >
                    <ListItemIcon>
                        <PermIdentityIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ margin: '10px 0' }} primary="Profile Information" />
                </ListItemButton>
                <Divider />
                <ListItemButton
                    sx={{
                        '&:focus': {
                            color: textColor
                        }
                    }}
                    selected={selectedIndex === 5}
                    onClick={() => (
                        localStorage.clear(),
                        deleteToken(),
                        router.push('/account/login'))}
                >
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ margin: '10px 0' }} primary="Logout" />
                </ListItemButton>
            </Box>
        </Grid>

    );
}

export default Menu;