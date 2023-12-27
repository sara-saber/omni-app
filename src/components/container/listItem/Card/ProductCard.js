
import { Card, ImageListproductBar, Rating, Grid, Box, CardContent, CardActions, IconButton, Button, Typography, Stack } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Skeleton } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
const ProductCard = (props) => {
    const stockStatus = useState(props?.product.stock_status)
    return (
        <Card key={props?.product} sx={{boxShadow:{md:'0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',xs:'none'}, width: { md: "259px", xs: "150px" }, height: "451px", p: 3 }}>
            {console.log(props?.product)}
            <Grid md={12} container justifyContent={"center"}>
                <img
                    sx={{ width: { md: '254px', xs: '150px' } }}
                    width={"204px"}
                    height={"254px"}
                    loading="lazy"
                    src={props.product.image.url}
                />
                {/* <Image width={200} height={40} src={props?.product.image.url}/> */}
            </Grid>
            <Grid container gap={{ md: 1, xs: 1.1 }} pt={2} justifyContent={"space-between"}>
                <Typography order={{ md: 1, xs: 2 }} color={"#17468F"}>{props?.product.categories[2].name}</Typography>
                <Stack order={{ md: 2, xs: 1 }}>
                    <Rating
                        name="size-small"
                        value={3}
                        // value={props?.rating}
                        readOnly
                        size="small"
                    />
                </Stack>

            </Grid>
            <Grid pt={0.5} md={10}>
                <Typography height={60} fontSize={14}>
                    {props.product.name}
                </Typography>
            </Grid>
            <Grid container pt={1} alignItems={"center"} justifyContent={"space-between"}>
                <Typography sx={{ display: { md: "inline", xs: "none" }, textDecoration: 'line-through', fontSize: 'small' }}>
                    {props?.product.display_tax.price_currency}
                </Typography>
                <Typography>
                    {props?.product.display_tax.price_currency}
                </Typography>
                <Box alignItems={"center"} display={"flex"}>
                    <Typography sx={{ display: { md: "inline", xs: "none" } }} fontSize={12}>
                        {props?.product.stock_status}
                    </Typography>
                    <Skeleton sx={{ ml: 1, bgcolor: stockStatus === "IN_STOCK" ? "#EB1C23" : "#27AE60" }} variant="circular" width={12} height={12} />
                </Box>
            </Grid>
            <Grid container pt={1} md={12} justifyContent={"center"}>
                <Button alignItems={"center"} startIcon={<ShoppingBasketIcon />} sx={{textTransform:'none', color: '#2B3445', width: 253, height: 40, border: ' 1px solid #E0E0E0', borderRadius: '20px' }} size="small" >Add To Card</Button>
            </Grid>
        </Card>
    );
}

export default ProductCard;