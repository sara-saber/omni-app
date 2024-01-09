
import { Card, ImageListproductBar, Rating, Grid, Box, CardContent, CardActions, IconButton, Button, Typography, Stack } from '@mui/material';
import { Skeleton } from '@mui/material';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
const ProductCard = (props) => {
    const stockStatus = useState(props?.product.stock_status)
    return (
        <Card key={props?.product}
            sx={{
                '&:hover': {
                    boxShadow: { md: ' 0px 3px 30px #0000001A', xs: 'none' },
                    '.addbtn': {
                        md: {
                            color: '#FFFF',
                            backgroundColor: '#17468F'
                        }
                    }
                },
                boxShadow: { md: '0px', xs: 'none' },
                borderRadius: 2,
                border: { md: '1px solid var(--light-gray)', xs: 0 },
                width: {  md: "240px", xs: "164px" }, height: { md: "451px", xs: '388px' }, p: { md: 2.8, xs: 0 }
            }}>
            {console.log(props?.product)}
            <Grid md={12} conainer >
                {/* <Box height={100} position={'absolute'} >
                    <Typography fontSize={'small'} sx={{ borderRadius: 12, textAlign: 'center', backgroundColor: '#EB1C23', color: '#ffff', width: 55, height: 23 }}>Sale</Typography>
                </Box> */}
                <img className='productImg'
                    style={{ objectFit: 'contain' }}
                    width="254px"
                    height="254px"
                    loading="lazy"
                    src={props.product.image.url}
                />
                {/* <Grid container>
                    <IconButton>
                        <FavoriteBorderIcon></FavoriteBorderIcon>
                    </IconButton>
                    <IconButton>
                        <FavoriteBorderIcon></FavoriteBorderIcon>
                    </IconButton>
                </Grid> */}
            </Grid>
            <Grid pt={{ md: 3, xs: 1 }} container justifyContent={"space-between"} gap={0.3}>
                <Grid order={{ md: 1, xs: 2 }} xs={12} md={1}>
                    <Typography fontWeight={600} color={"#17468F"}>{props?.product.categories[2].name}</Typography>
                </Grid>
                <Grid order={{ md: 2, xs: 1 }} xs={12} md={4}>
                    <Stack>
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
            <Grid pt={0.5} md={8}>
                <Typography height={46} width='100%' overflow={'hidden'} fontSize={14}>
                    {props.product.name}
                </Typography>
            </Grid>
            <Grid container pt={1} alignItems={"center"} justifyContent={"space-between"}>
                <Box display={'flex'} alignItems={'center'} gap={1}  justifyContent={'space-between'}>
                    <Typography color={'#C4C4C4'} sx={{ display: { md: "inline", xs: "none" }, textDecoration: 'line-through', fontSize: 'small' }}>
                        {props?.product.display_tax.price_currency}
                    </Typography>
                    <Typography fontWeight={600}>
                        {props?.product.display_tax.price_currency}
                    </Typography>
                </Box>
                <Box alignItems={"center"} justifyContent={'space-between'} display={"flex"} >
                    <Typography fontWeight={550} sx={{ display: { md: "inline", xs: "none" } }} fontSize={12}>
                        {props?.product.stock_status}
                    </Typography>
                    <Box borderRadius={20} sx={{ ml: 0.5, bgcolor: stockStatus === "IN_STOCK" ? "#EB1C23" : "#27AE60" }} variant="circular" width={12} height={12} />
                </Box>
            </Grid>
            <Grid container pt={1.5} md={12} justifyContent={"center"}>
                <Button className='addbtn' alignItems={"center"} startIcon={<LocalMallOutlinedIcon />} sx={{fontWeight:{xs:700,md:500},textTransform: 'none', color: '#2B3445', width: 253, height: 40, border: ' 1px solid #E0E0E0', borderRadius: '20px' }} size="small" >Add To Cart</Button>
            </Grid>
        </Card>
    );
}

export default ProductCard;