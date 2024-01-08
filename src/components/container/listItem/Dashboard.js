import { Typography, IconButton, Box, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_DASHBOARD, Get_Customer } from '@/graphql/Query';
import PageName from './PageName/PageName';

const Dashboard = () => {
    const router = useRouter()
    const { data, loading, error } = useQuery(GET_DASHBOARD)
    const { data: customer } = useQuery(Get_Customer)
    return (
        <>
            <Grid display={{md:'none',xs:'flex'}}>

                <PageName show={'none'} name={'Hi ,' + customer?.customer.firstname}>
                </PageName>
            </Grid>
            <Grid container gap={'23px'} md={10} >
                <Grid md={12}>
                    {/* {console.log(document.cookie.split(';')[0].split('=')[1])} */}
                    <Typography fontWeight={600}>My dashboard</Typography>
                </Grid>
                <Grid md={11.4} >
                <Typography sx={{ letterSpacing: '0px', color: '#2B3445', opacity: 1 }}>
                    From your Profile Dashboard you have the ability to view a snapshot of your Profile and update your account information. Select a link below to view or edit information.
                </Typography>
                </Grid>
                <Grid container justifyContent={{ xs: "center", md: 'space-between' }} gap={1} md={11} >
                    <Grid md={5.5} minWidth={{ md: 321, xs: '100%' }} backgroundColor='#F8FAFD' py={'18px'} px={'23px'}  border='1px solid #E0E0E0' borderRadius={2}>
                        <Grid container alignItems={'center'} justifyContent={'space-between'} >
                            <Typography level="title-md" fontSize={16}>My Orders</Typography>
                            <ShoppingBagOutlinedIcon sx={{ width: 37, height: 35, color: '#17468F' }} />
                        </Grid>
                        <Typography level="title-lg" fontSize={40}>{data?.customer.orders.total_count}</Typography>
                        <Grid pt={'18px'} container alignItems={'center'} justifyContent={'space-between'} >
                            <Typography fontSize={16} >Check your Orders</Typography>
                            <IconButton
                                aria-label="bookmark Bahamas Islands"
                                variant="plain"
                                size="sm"
                                onClick={() => router.push("orders")}
                            >
                                <NavigateNextOutlinedIcon />
                            </IconButton>
                        </Grid>

                    </Grid>
                    <Grid md={5.5}  minWidth={{ md: 321, xs: '100%' }} backgroundColor='#F8FAFD' py={'18px'} px={3} border='1px solid #E0E0E0' borderRadius={2}>
                        <Grid container alignItems={'center'} justifyContent={'space-between'} >
                            <Typography level="title-md" fontSize={16}>Wishlist</Typography>

                            <FavoriteBorderIcon sx={{ width: 37.91, height: 37.91, color: '#17468F' }} />

                        </Grid>
                        <Typography level="title-lg" fontSize={40}>{data?.customer?.wishlist?.items_count}</Typography>
                        <Grid pt={'18px'}  container alignItems={'center'} justifyContent={'space-between'} >
                            <Typography fontSize={16} >Check your wishlist </Typography>
                            <IconButton
                                aria-label="bookmark Bahamas Islands"
                                variant="plain"
                                size="sm"
                                onClick={() => router.push("wishlist")}
                            >
                                <NavigateNextOutlinedIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        </>

    );
}

export default Dashboard;