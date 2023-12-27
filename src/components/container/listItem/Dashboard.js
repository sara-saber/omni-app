import { Typography, IconButton, Box, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_DASHBOARD } from '@/graphql/Query';
import { Skeleton } from '@mui/material';

const Dashboard = () => {
    const router = useRouter()
    const { data, loading, error } = useQuery(GET_DASHBOARD)

    return (

        <Grid container gap={2} md={8}>
            <Grid md={12}>
                <Typography>My dashboard</Typography>
            </Grid>
            <Typography sx={{ letterSpacing: '0px', color: '#2B3445', opacity: 1 }}>
                From your Profile Dashboard you have the ability to view a snapshot of your Profile and update your account information. Select a link below to view or edit information.
            </Typography>
            <Grid container gap={2}>
                <Box width={250} backgroundColor='#F8FAFD' py={1} px={3} border='1px solid #E0E0E0' borderRadius={2}>
                    <Grid container alignItems={'center'} justifyContent={'space-between'} >
                        <Typography level="title-md" fontSize={16}>My Orders</Typography>
                        <LocalMallOutlinedIcon sx={{ width: 38, height: 35, color: '#17468F' }} />
                    </Grid>
                    <Typography level="title-lg" fontSize={40}>{data?.customer.orders.total_count}</Typography>
                    <Grid container alignItems={'center'} justifyContent={'space-between'} >
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

                </Box>
                <Box width={250} backgroundColor='#F8FAFD' py={1} px={3} border='1px solid #E0E0E0' borderRadius={2}>
                    <Grid container alignItems={'center'} justifyContent={'space-between'} >
                        <Typography level="title-md" fontSize={16}>Wishlist</Typography>

                        <FavoriteBorderIcon sx={{ width: 38, height: 35, color: '#17468F' }} />

                    </Grid>
                    <Typography level="title-lg" fontSize={40}>{data?.customer?.wishlist?.items_count}</Typography>
                    <Grid container alignItems={'center'} justifyContent={'space-between'} >
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
                </Box>
            </Grid>
        </Grid >
    );
}

export default Dashboard;