import {  Avatar,Skeleton } from "@mui/material";
import { Grid,Divider, Typography } from '@mui/material';
import { useQuery } from "@apollo/client";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ProductCard from "./Card/ProductCard";
import { Get_Cutomer_Wishlist } from "@/graphql/Query";


const WishList = () => {
    const { data, loading: wishlistLoading } = useQuery(Get_Cutomer_Wishlist)
    const products = ['Casino', 'MONOPRIX BIO', 'Casino'];
    return (
        <Grid>
           <Grid md={12}>
           <Grid md={12} xs={12} container gap={2} alignItemst={"center"}>
                <Grid sx={{ display: { md: 'none', xs: 'flex' } }} xs={4}>
                    <Avatar>
                        <KeyboardBackspaceIcon />
                    </Avatar>
                </Grid>
                <Grid xs={6}>
                    <Typography fontSize={20} fontWeight={700} justifyContent={{ xs: 'center', md: 'flex-start' }} pb={2}  >
                       WishList
                    </Typography>
                </Grid>
                <Grid>
                    <Divider/>
                </Grid>
            </Grid>
           </Grid>
            <Grid pt={2} container gap={4}>
                {wishlistLoading ?
                    <Grid sx={{ pt: 0.5 }}>
                        <Skeleton width='600px' height={20} />
                        <Skeleton width='560px' height={20} />
                        <Skeleton width='520px' height={20} />
                    </Grid>
                    :
                    <Grid md={12} gap={2} container>
                        {data?.customer && data?.customer.wishlist?.items?.map((item) => (

                            <ProductCard product={item?.product} />
                        ))}
                    </Grid>

                }
            </Grid >
        </Grid>

    );
}

export default WishList;