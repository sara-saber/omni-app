
import { Card, ImageListproductBar, Rating, Grid, Box, CardContent, CardActions, IconButton, Button, Typography, Stack } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Skeleton } from '@mui/material';
import { useState } from 'react';
const ProductCard = (props) => {
    const stockStatus = useState(props?.product.stock_status)
    return (
        <Card key={props?.product} sx={{
            boxShadow: { md: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)', xs: 'none' },
            maxWidth: { md: "259px", xs: "164px" }, height: {md:"451px",xs:'358px'}, p: { md: 3, xs: 0 }
        }}>
            {console.log(props?.product)}
            <Grid md={12} container justifyContent={"center"}>
                <img className='productImg'
                    style={{ objectFit: 'contain' }}
                    width="204px"
                    height="254px"
                    loading="lazy"
                    src={props.product.image.url}
                />
            </Grid>
            <Grid pt={{ md: 3, xs: 1 }} container justifyContent={"space-between"}>
                <Grid xs={12} md={1}>
                    <Typography order={{ md: 1, xs: 2 }} color={"#17468F"}>{props?.product.categories[2].name}</Typography>
                </Grid>
                <Grid xs={12} md={4}>
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
            </Grid>
            <Grid pt={0.5} md={10}>
                <Typography height={60} width='100%' overflow={'hidden'} fontSize={14}>
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
                <Button alignItems={"center"} startIcon={<ShoppingBasketIcon />} sx={{ textTransform: 'none', color: '#2B3445', width: 253, height: 40, border: ' 1px solid #E0E0E0', borderRadius: '20px' }} size="small" >Add To Card</Button>
            </Grid>
        </Card>
    );
}

export default ProductCard;