import { Avatar, Grid, Button, Box, Typography, Card, Divider, Drawer } from '@mui/material';
import Link from 'next/link'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CenterDrawer from '../Drawer/CenterDrawer';
import ShipmentDetails from './ShipmentDetails';
import { useState } from 'react';
import InvoiceDetails from './InvoiceDetails';
import { useRouter } from 'next/router';
const OrderDetails = (props) => {
    const router=useRouter()
    const [drawer, setDrawer] = useState()
    const [drawerId, setId] = useState()
    return (
        <Box>
            {<Grid  sx={{ display: { md: 'none', xs: 'flex' } }} mt={2} md={12} xs={12} container alignItemst={"center"}>
                <Grid xs={1}>
                    <Avatar sx={{ backgroundColor: '#F8FAFD' }}>
                        <ArrowBackIcon onClick={()=>router.push('/my-account/orders')} sx={{ color: '#2B3445' }} />
                    </Avatar>
                </Grid>
                <Grid textAlign={'center'} xs={11}>
                    <Typography fontSize={20} fontWeight={550} justifyContent={{ xs: 'center', md: 'flex-start' }} pb={2}  >
                        #{props?.DataDetails?.number}
                    </Typography>
                </Grid>
            </Grid>}
            <Grid container gap={{ xs: 0, md: 0 }}>


                {props.DataDetails &&
                    <Grid m={1} container gap={{ md: 5, xs: 2 }}>
                        <Grid order={{ xs: 2, md: 1 }} xs={12} md={7.6}>
                            {props?.DataDetails.items && props?.DataDetails.items.map((productItem) => (
                                <Grid key={productItem.id}>
                                    <Grid pt={3} container columnGap={{ md: 0.5, xs: 1 }} rowGap={{ md: 2, xs: 1 }}>
                                        <Grid justifyContent={'center'} md={1.7} xs={3} >
                                            <img width={68} height={68} src={productItem.product_small_image.url}></img>
                                        </Grid>
                                        <Grid container gap={{ md: 1, xs: 0 }} md={10.2} xs={8.6}>
                                            <Grid md={8} xs={12}>
                                                <Typography fontWeight={600} color='#17468F' fontSize='14px'>
                                                    No Brand
                                                </Typography>
                                                <Typography color='#2B3445' fontSize='16px'>
                                                    {productItem.product_name}
                                                </Typography>
                                                <Grid container columnGap={{ md: 2, xs: 1.6 }}>
                                                    <Typography color='#999999' fontSize='14px'>
                                                        Delivered QTY:{productItem.quantity_ordered}
                                                    </Typography>
                                                    <Typography color='#999999' fontSize='14px'>
                                                        Invoiced QTY: {productItem.quantity_invoiced}
                                                    </Typography>
                                                </Grid>

                                            </Grid>
                                            <Grid pt={1} textAlign={{ md: "right", xs: 'left' }} gap={{ md: 1.2, xs: 3 }} >
                                                <Typography fontSize='14px'>
                                                    2 x CHF 25.00
                                                </Typography>
                                                <Typography fontWeight={600} fontSize='16px' >
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
                        <Grid maxHeight="318px" justifyContent={"center"} alignContent={"center"} container gap={3} p={2}
                            sx={{ backgroundColor: { xs: '#F8FAFD', md: '#F5F5F5' }, textAlign: "center" }} order={{ xs: 1, md: 2 }} xs={12} md={3.5}>
                            <Grid xs={12} md={12}>
                                <Typography fontSize={24} color='#ED6C02'>
                                    {props?.DataDetails.status}</Typography>
                            </Grid>
                            <Button
                                onClick={() => (setDrawer(true), setId('1'))} fullWidth sx={{
                                    '&:hover': {
                                        borderColor: '#111',
                                        backgroundColor: '#fff'
                                    }
                                    , backgroundColor: 'white', color: '#2B3445', borderColor: '#2B3445', maxWidth: 175
                                }} variant="outlined"
                                startIcon={<LocalShippingOutlinedIcon />}>Shipment(s)</Button>
                            <Button onClick={() => (setDrawer(true), setId('2'))} fullWidth sx={{
                                '&:hover': {
                                    borderColor: '#111',
                                    backgroundColor: '#fff'
                                }
                                , backgroundColor: 'white', color: '#2B3445', borderColor: '#2B3445', maxWidth: 175
                            }} variant="outlined"
                                startIcon={<DescriptionOutlinedIcon />}>Invoice(s)</Button>
                            <Grid container rowGap={2} justifyContent={"center"}>
                                <Divider orientation="horizontal" flexItem fullWidth></Divider>
                                <Button fullWidth sx={{ py: 4, fontWeight: 700, maxWidth: '175px', color: '#2B3445', textTransform: 'none', fontSize: 14 }} variant="text" startIcon={<PictureAsPdfOutlinedIcon />}>Download PDF</Button>
                            </Grid>

                            {/* <Drawer anchor='top' open={open} onClose={close}>

                            </Drawer> */}
                            <CenterDrawer 
                            mx='20%'
                            mt='5%'
                            pb={50}
                            name={drawerId === '1' ? 'Shipments' : 'Invoices'} drawer={drawer} setDrawer={setDrawer} >
                                {drawerId === '1' ?
                                    <ShipmentDetails shipments={props?.DataDetails.shipments} >
                                    </ShipmentDetails>
                                    :
                                    <InvoiceDetails>
                                    </InvoiceDetails>
                                }
                            </CenterDrawer>

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
                                    <Link href='#' style={{ color: 'black' }}>
                                        Sales agreement
                                    </Link>
                                    <Link href='#' style={{ color: 'black' }}>
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
                                        <Grid textAlign={'right'} md={5} xs={5}>
                                            <Typography fontWeight={600} pb='12px'>${props?.DataDetails.total.subtotal.value}</Typography>
                                            {/* <Typography pb='12px'>{props?.DataDetails.total.shipping_handling.total_shipping.value}</Typography> */}
                                            <Typography fontWeight={600} pb='12px'>-</Typography>
                                            <Typography fontWeight={600} pb='12px'>-</Typography>
                                            <Typography color='red'>{props?.DataDetails.total.shipping_handling.discounts.amount}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid pt={2} rowGap={1} container>
                                        <Grid md={12}><Divider /></Grid>
                                        <Grid xs={5}>
                                            <Typography>Total</Typography>

                                        </Grid>
                                        <Grid textAlign={'right'} xs={6}>
                                            <Typography fontSize={20} fontWeight={700}>{props?.DataDetails.total.subtotal.currency} {props?.DataDetails.total.subtotal.value}</Typography>
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
                }

            </Grid >
        </Box>
    );
}

export default OrderDetails;