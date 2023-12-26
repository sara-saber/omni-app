import ProductCard from "@/components/container/listItem/Card/ProductCard";
import { Get_Products } from "@/graphql/Query";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";

const Home = () => {
  const { data, loading } = useQuery(Get_Products)
  return (
    <Grid container gap={2}>
      <Grid>
        {console.log(data)}
        {data?.products.items.map((item) => {
          console.log(item);
          <ProductCard data={item} ></ProductCard>
        })}
      </Grid>
    </Grid>
  );
}

export default Home;














// import { Box, Grid } from '@mui/material'; import Card from '@mui/joy/Card'; import Typography from '@mui/joy/Typography'; import IconButton from '@mui/joy/IconButton'; import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'; import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined'; import { useRouter } from 'next/router'; import { useQuery } from '@apollo/client'; import { GET_DASHBOARD } from '@/graphql/Query'; import { Skeleton } from '@mui/material'; const Dashboard = () => { const router = useRouter() const { data, loading, error } = useQuery(GET_DASHBOARD) return (<Grid container gap={2} md={10}> {/* {console.log(data?.customer?.orders)} */} <Grid md={12}> <Typography>My dashboard</Typography> </Grid> <Typography sx={{ letterSpacing: '0px', color: '#2B3445', opacity: 1 }}> From your Profile Dashboard you have the ability to view a snapshot of your Profile and update your account information. Select a link below to view or edit information.</Typography> {loading ? <Box sx={{ pt: 0.5 }}> {/* <Skeleton animation="wave" width="100%" height={250} /> */} </Box> : <Grid container gap={2} > <Box width={321} backgroundColor='#F8FAFD' py={1} px={3} border='2px solid #E0E0E0' borderRadius={2}> <Grid container justifyContent={'space-between'} > <Typography level="title-md" fontSize={16}>My Orders</Typography> <IconButton color="primary" sx={{ position: 'absolute', top: '20px', right: '23px' }} > <LocalMallOutlinedIcon sx={{ width: 38, height: 35 }} /> </IconButton> </Grid> <Typography level="title-lg" fontSize={40}>{data?.customer.orders.total_count}</Typography> <Grid container justifyContent={'space-between'} > <Typography fontSize={16} >Check your Orders</Typography> {/* <IconButton aria-label="bookmark Bahamas Islands" variant="plain" size="sm" onClick={() => router.push("orders")} > <NavigateNextOutlinedIcon /> </IconButton> */} </Grid> </Box> <Box width={321} backgroundColor='#F8FAFD' py={1} px={3} border='2px solid #E0E0E0' borderRadius={2}> <Grid container justifyContent={'space-between'} > <Typography level="title-md" fontSize={16}>Wishlist</Typography> <IconButton variant="plain" color="primary" size="sm" sx={{ position: 'absolute', top: '20px', right: '23px' }} > <FavoriteBorderIcon sx={{ width: 38, height: 35 }} /> </IconButton> </Grid> <Typography level="title-lg" fontSize={40}>{data?.customer?.wishlist?.items_count}</Typography> <Grid container justifyContent={'space-between'} > <Typography fontSize={16} >Check your wishlist </Typography> {/* <IconButton aria-label="bookmark Bahamas Islands" variant="plain" size="sm" onClick={() => router.push("wishlist")} > <NavigateNextOutlinedIcon /> </IconButton> */} </Grid> </Box> </Grid>} </Grid >); } export default Dashboard;