import Menu from "@/components/container/listItem/Menu";
import { Typography, Grid } from '@mui/material';
import { useRouter } from "next/router";
import Dashboard from "@/components/container/listItem/Dashboard";
import Order from "@/components/container/listItem/Orders";
import Addresses from "@/components/container/listItem/Addresses";
import WishList from "@/components/container/listItem/WishList";
import Profile from "@/components/container/listItem/Profile";
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { Get_Customer } from "@/graphql/Query";
import ChangePassword from "@/components/container/listItem/ChangePassword";
import ChangeEmail from "@/components/container/listItem/ChangeEmail";
import OrderDetails from "@/components/container/listItem/Order/OrderDetails";
const ContainerPage = () => {
    const [customer, setCustomer] = useState()
    const router = useRouter()
    const [name, setName] = useState()
    const { data } = useQuery(Get_Customer)
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
        default:
            contentToRender = <Dashboard />;
            break;
    }

    return (
        <Box sx={{ minHeight: "800px", mx:{md:"50px"},mt: { xs: '15px', md: '51px' }, marginBottom: 'auto',justifyContent:'space-between'}}>
            <Grid alignContent={"center"} container gap={{md:5,xs:0}}   >
                <Grid xs={12} md={3} order={{ md: 2, xs: 3 }}>
                    <Grid sx={{ display: { md: 'inline', xs: 'none' } }} xs={12} md={12} order={{ md: 1, xs: 1 }}>
                        <Typography fontSize={20} fontWeight={700}>Hi, {data?.customer.firstname}!</Typography>
                    </Grid>
                    <Menu />
                </Grid>
                <Grid  xs={12} md={8.5} order={{ md: 3, xs: 2 }}>
                    {contentToRender}
                </Grid>
            </Grid>
        </Box>
    )
}

export default ContainerPage;