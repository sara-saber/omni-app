
import { Typography, Grid } from '@mui/material';
import { useRouter } from "next/router";
import Dashboard from "@/components/container/listItem/Dashboard";
import Order from "@/components/container/listItem/Orders";
import Addresses from "@/components/container/listItem/Addresses/Addresses";
import WishList from "@/components/container/listItem/WishList";
import Profile from "@/components/container/listItem/Profile";
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import ChangePassword from "@/components/container/listItem/ChangePassword";
import ChangeEmail from "@/components/container/listItem/ChangeEmail";
import OrderDetails from "@/components/container/listItem/Order/OrderDetails";
import Menu from '@/components/container/listItem/Menu';
import EditAddresses from '@/components/container/listItem/Addresses/EditAddress';
const ContainerPage = () => {
    const [customer, setCustomer] = useState()
    const router = useRouter()
    const { params = [] } = router.query
    let contentToRender;
    const logout = () => {
        document.cookie = 'token= ; path=/'
        // localStorage.removeItem('token')
        router.push('/account/login')
    }
    switch (params[0]) {
        case "dashboard":
            contentToRender = <Dashboard />;
            break;
        case "orders":
            contentToRender = <Order />;
            break;
        case "addresses":
            contentToRender = <Addresses />;
            break;
        case "wishlist":
            contentToRender = <WishList />;
            break;
        case "profile-information":
            contentToRender = <Profile />;
            break;
        case "change-password":
            contentToRender = <ChangePassword />;
            break;
        case "change-email":
            contentToRender = <ChangeEmail />;
            break;
        case 'order/':
            contentToRender = <OrderDetails />
        case 'addresses/edit/':
            contentToRender = <EditAddresses />
            break;
        default:
            contentToRender = <Dashboard />;
            break;
    }

    return (
        <Box sx={{ minHeight: "800px", mx: { md: "20px", lg: '50px' }, mt: { xs: '15px', md: '51px' }, marginBottom: 'auto', justifyContent: 'space-between' }}>
            <Grid alignContent={"center"} container gap={{ md: 1, xs: 12, lg: 5 }}   >
                <Menu></Menu>
                <Grid xs={12} md={12} lg={8.5} order={{ md: 3, xs: 2 }}>
                    {contentToRender}
                </Grid>
            </Grid>
        </Box>
    )
}

export default ContainerPage;