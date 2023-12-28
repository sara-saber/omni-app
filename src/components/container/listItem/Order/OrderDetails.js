import { Link, Grid, Button, Box, Typography, Card, Divider } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
const OrderDetails = (props) => {
    return (
        <Grid container gap={{ xs: 2, md: 0 }}>
            {/* {console.log(props?.DataDetails)}
            {console.log(props?.DataDetails.items)} */}
            <Grid m={1} container gap={{ md: 5, xs: 2 }}>
                <Grid order={{ xs: 2, md: 1 }} xs={12} md={7}>
                    {props?.DataDetails.items && props?.DataDetails.items.map((productItem) => (
                        <Grid key={productItem.id}>
                            <Grid container gap={1} p={1} >
                                <Grid md={2} xs={3} >
                                    <img width={68} height={68} src={productItem.product_small_image.url}></img>
                                </Grid>
                                <Grid container gap={{ md: 1, xs: 0 }} md={9} xs={8}>
                                    <Grid md={8} xs={12}>
                                        <Typography color='#17468F' fontSize='14px'>
                                            No Brand
                                        </Typography>
                                        <Typography color='#2B3445' fontSize='16px'>
                                            {productItem.product_name}
                                        </Typography>
                                        <Grid container gap={2}>
                                            <Typography color='#999999' fontSize='14px'>
                                                Delivered QTY:{productItem.quantity_ordered}
                                            </Typography>
                                            <Typography color='#999999' fontSize='14px'>
                                                Invoiced QTY: {productItem.quantity_invoiced}
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                    <Grid container gap={{ md: 0, xs: 1 }} md={3} xs={12}>
                                        <Typography fontSize='14px'>
                                            2 x CHF 25.00
                                        </Typography>
                                        <Typography fontSize='16px' >
                                            CHF 50.00
                                        </Typography>

                                    </Grid>
                                </Grid>
                                <Grid md={12}>
                                    <Divider />
                                </Grid>
                            </Grid>

                        </Grid>
                    ))
                    }
                </Grid>
                <Grid maxHeight="318px" justifyContent={"center"} alignContent={"center"} container gap={3} p={2} sx={{ backgroundColor: '#F5F5F5', textAlign: "center" }} order={{ xs: 1, md: 2 }} xs={12} md={4}>
                    <Grid xs={12} md={12}>
                        <Typography fontSize={24} color='#ED6C02'>
                            {props?.DataDetails.status}</Typography>
                    </Grid>

                    <Button sx={{ backgroundColor: 'white',color:'#2B3445',borderColor:'#2B3445', width: 175 }} variant="outlined" startIcon={<LocalShippingOutlinedIcon />}>Shipment(s)</Button>
                    <Button sx={{ backgroundColor: 'white',color:'#2B3445',borderColor:'#2B3445', width: 175 }} variant="outlined" startIcon={<DescriptionOutlinedIcon />}>Invoice(s)</Button>
                    <Grid md={12}>
                        <Divider />
                    </Grid>
                    <Button sx={{fontWeight:700, maxWidth: '175px',color:'#2B3445',textTransform:'none',fontSize:16 }} variant="text" startIcon={<PictureAsPdfOutlinedIcon />}>Download PDF</Button>


                </Grid>
                <Grid order={{ xs: 4, md: 3 }} xs={12} md={7}>
                    <Grid md={12} maxWidth='625px' >
                        <Typography color='#999999' fontSize='16px' mb='12px' >
                            Delivery Address
                        </Typography>
                        <Typography color='#2B3445' fontSize='16px' mb='6px'>
                            {props?.DataDetails.shipping_address.firstname}  {props?.DataDetails.shipping_address.lastname}
                        </Typography>
                        <Typography maxWidth='375px' height='71px' fontSize='16px'>
                            {props?.DataDetails.shipping_address.street[0]} {props?.DataDetails.shipping_address.country_code} {props?.DataDetails.shipping_address.city}
                        </Typography>
                    </Grid>
                    <Grid pt='28px'>
                        <Typography color='#999999' fontSize='16px' mb='12px'>
                            Billing Address
                        </Typography>
                        <Typography color='#2B3445' fontSize='16px' mb='6px'>
                            {props?.DataDetails.billing_address.firstname} {props?.DataDetails.billing_address.lastname}
                        </Typography>
                        <Typography maxWidth='375px' height='71px' fontSize='16px'>
                            {props?.DataDetails.billing_address.street[0]} {props?.DataDetails.billing_address.street[1]}  {props?.DataDetails.billing_address.region} {props?.DataDetails.billing_address.city}
                        </Typography>
                        <Box display='flex' maxWidth='250px' mt='32px' justifyContent='space-between'>
                            <Link  href='#' color='#2B3445'>
                                Sales agreement
                            </Link>
                            <Link href='#' color='#2B3445'>
                                Return Policy
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Grid order={{ xs: 3, md: 4 }} xs={12} md={4} >
                    <Typography color='#999999' fontSize='16px' mb='12px' >
                        Summary
                    </Typography>

                    <Card height="230px" >
                        <Grid container gap={1} p={3}>
                            <Grid container gap={1}>
                                <Grid md={5} xs={5} >
                                    <Typography pb='12px'>Subtotal</Typography>
                                    <Typography pb='12px'>Shipping</Typography>
                                    <Typography pb='12px'>Tax</Typography>
                                    <Typography color='red'>Discount</Typography>
                                </Grid>
                                <Grid md={5} xs={5}>
                                    <Typography fontWeight={600} pb='12px'>${props?.DataDetails.total.subtotal.value}</Typography>
                                    {/* <Typography pb='12px'>{props?.DataDetails.total.shipping_handling.total_shipping.value}</Typography> */}
                                    <Typography fontWeight={600} pb='12px'>-</Typography>
                                    <Typography fontWeight={600} pb='12px'>-</Typography>
                                    <Typography color='red'>{props?.DataDetails.total.shipping_handling.discounts.amount}</Typography>
                                </Grid>
                            </Grid>
                            <Grid pt={2} gap={1} container>
                                <Grid md={12}><Divider /></Grid>
                                <Grid xs={5}>
                                    <Typography>Total</Typography>

                                </Grid>
                                <Grid xs={5}>
                                    <Typography fontWeight={600}>${props?.DataDetails.total.subtotal.value}</Typography>

                                </Grid>
                            </Grid>
                        </Grid>

                        {/* <Box display='flex' justifyContent="center">
<PictureAsPdfOutlinedIcon  />
<Typography>Download PDF</Typography>
</Box> */}
                    </Card>
                    <Card sx={{ mt: '16px', backgroundColor: '#F5F5F5', height: '76px' }} >
                        <Typography ml='18px' mt='13px' color='#999999' fontSize='16px'>Payment information:</Typography>
                        <Typography ml='18px'>{props?.DataDetails.payment_methods[0].name}</Typography>
                    </Card>

                </Grid>

            </Grid>


        </Grid >

    );
}

export default OrderDetails;