import { Avatar, Skeleton } from "@mui/material";
import { Grid, Divider, Typography } from '@mui/material';
import { useMutation, useQuery } from "@apollo/client";
import ProductCard from "./shared/Card/ProductCard";
import { Get_Cutomer_Wishlist } from "@/graphql/Query";
import { useState } from "react";
import PageName from "./shared/PageName/PageName";


const WishList = () => {
    const router = useState()
    const { data, loading: wishlistLoading } = useQuery(Get_Cutomer_Wishlist)
    const products = ['Casino', 'MONOPRIX BIO', 'Casino'];
    return (
        <Grid >
            <PageName position={'center'} name={'WishList'} url={'/my-account/dashboard'}>
            </PageName>
            <Grid>
                {wishlistLoading ?
                    <Grid md={8} sx={{ pt: 0.5 }}>
                        <Skeleton maxWidth='600px' height={20} />
                        <Skeleton maxWidth='560px' height={20} />
                        <Skeleton maxWidth='520px' height={20} />
                    </Grid>
                    :
                    <Grid md={12} gap={{ md: 3, xs: 1, lg: '26px'}} container>
                        {data?.customer && data?.customer.wishlist.items_v2.items.map((item) => (

                            <ProductCard  wishlistId={data?.customer.wishlist.id} id={item?.id} product={item?.product} />
                        ))}
                    </Grid>

                }
            </Grid >
        </Grid>

    );
}

export default WishList;