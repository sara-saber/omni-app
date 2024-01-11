
import { Card, ImageListproductBar, Rating, Grid, Box, CardContent, CardActions, IconButton, Button, Typography, Stack } from '@mui/material';
import { Skeleton } from '@mui/material';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { REMOVE_FROM_WISHLIST } from '@/graphql/Mutations';
import { useMutation } from '@apollo/client';
import { Get_Cutomer_Wishlist } from '@/graphql/Query';
const ProductCard = (props) => {
    const stockStatus = useState(props?.product.stock_status)
    const wishlistId = props?.wishlistId
    const [compareColor, setcopmareColor] = useState(false)
    const [removeProduct, { data: wishlist, loading, error }] = useMutation(REMOVE_FROM_WISHLIST)

    const removeFromProduct = (id) => {
        console.log(id);
        removeProduct({
            variables: {
                wishlistId: wishlistId,
                itemId: id
            },
            refetchQueries: [
                { query: Get_Cutomer_Wishlist }
            ]
        })
    }
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
                    },
                    '.productBox': {
                        display: 'flex',
                        // animation:"2s"
                    }
                },
                boxShadow: { md: '0px', xs: 'none' },
                borderRadius: 2,
                border: { md: '1px solid var(--light-gray)', xs: 0 },
                width: { md: "240px", xs: "164px" }, height: { md: "451px", xs: '388px' }, p: { md: 2.8, xs: 0 }
            }}>
            {console.log(props?.product)}
            <Box md={12} conainer >
                <Box width={{ xs: 164, md: 254 }} position={'absolute'} display={'flex'} justifyContent={'space-between'}>
                    <Grid container gap={0.5} md={2.7} >
                        {
                            props?.product.is_new === 1 ?
                                <Typography fontSize={'small'} sx={{ borderRadius: 12, textAlign: 'center', backgroundColor: '#EB1C23', color: '#ffff', width: 55, height: 23 }}>Sale</Typography>
                                : null

                        }
                        {
                            props?.product.best_seller === 1 ?
                                <Typography fontSize={'small'} sx={{ borderRadius: 12, textAlign: 'center', backgroundColor: '#17468F', color: '#ffff', width: 55, height: 23 }}>New</Typography>
                                : null
                        }

                    </Grid>
                    <Grid
                        display={'none'} className='productBox'
                        sx={{
                            '.MuiIconButton-root': {
                                width: '36px',
                                height: '36px'
                            }
                        }} container gap={1.5} md={2} >
                        <IconButton onClick={() => removeFromProduct(props?.id)} sx={{ border: '1px solid var(--light-gray)', padding: 1 }}>
                            {loading ?
                                <FavoriteBorderIcon></FavoriteBorderIcon>
                                : <FavoriteIcon sx={{ color: loading ? '#FFFF' : '#17468F' }}></FavoriteIcon>}
                        </IconButton>
                        <IconButton onClick={() => setcopmareColor(!compareColor)} sx={{ border: '1px solid var(--light-gray)', padding: 1 }}>
                            <CompareArrowsIcon sx={{ color: compareColor ? '#17468F' : '#C4C4C4' }}></CompareArrowsIcon>
                        </IconButton>
                    </Grid>

                </Box>
                <img className='productImg'
                    style={{ objectFit: 'contain' }}
                    width="254px"
                    height="254px"
                    loading="lazy"
                    src={props.product.image.url}
                />

            </Box>
            <Grid pt={{ md: 3, xs: 1 }} container justifyContent={"space-between"} gap={0.3}>
                <Grid order={{ md: 1, xs: 2 }} xs={12} md={6}>
                    <Typography fontWeight={600} color={"#17468F"}>{props?.product.categories[2].name}</Typography>
                </Grid>
                <Grid order={{ md: 2, xs: 1 }} xs={12} md={4.4}>
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
                <Box display={'flex'} alignItems={'center'} gap={1} justifyContent={'space-between'}>
                    <Typography color={'#C4C4C4'} sx={{ display: { md: "inline", xs: "none" }, textDecoration: 'line-through', fontSize: 'small' }}>
                        {props?.product.display_tax.price_currency}
                    </Typography>
                    <Typography fontWeight={600}>
                        {props?.product.display_tax.price_currency}
                    </Typography>
                </Box>
                <Box alignItems={"center"} justifyContent={'space-between'} display={"flex"} >
                    <Typography fontWeight={550} sx={{ display: { md: "inline", xs: "none" } }} fontSize={12}>
                        {props?.product.stock_status === 'IN_STOCK' || 'OUT_OF_STOCK' ? 'in stock' : props?.product.stock_status}
                    </Typography>
                    <Box borderRadius={20} sx={{ ml: 0.5, bgcolor: stockStatus === "IN_STOCK" ? "#EB1C23" : "#27AE60" }} variant="circular" width={12} height={12} />
                </Box>
            </Grid>
            <Grid container pt={1.5} md={12} justifyContent={"center"}>
                <Button className='addbtn' alignItems={"center"} startIcon={<LocalMallOutlinedIcon />} sx={{ fontWeight: { xs: 700, md: 500 }, textTransform: 'none', color: '#2B3445', width: 253, height: 40, border: ' 1px solid #E0E0E0', borderRadius: '20px' }} size="small" >Add To Cart</Button>
            </Grid>
        </Card>
    );
}

export default ProductCard;