import { Box, Skeleton } from "@mui/material";
import { Grid, Typography } from '@mui/material';
import { useQuery } from "@apollo/client";

import ProductCard from "./Card/ProductCard";
import { Get_Cutomer_Wishlist } from "@/graphql/Query";


const WishList = () => {
    const { data, loading: wishlistLoading } = useQuery(Get_Cutomer_Wishlist)
    const products = ['Casino', 'MONOPRIX BIO', 'Casino'];
    return (
        <>
            <Typography>wishList</Typography>
            <Grid container gap={4}>
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
        </>

    );
}

export default WishList;