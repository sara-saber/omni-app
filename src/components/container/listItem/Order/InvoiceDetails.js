import { Button, Divider, Grid, Typography } from "@mui/material";
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';

const InvoiceDetails = () => {
    return (

        <Grid container>
            <Grid xs={12} p={{ xs: '11px', md: 4 }} order={{ md: 1, xs: 2 }}>
                <Grid container justifyContent={'space-between'}>
                    <Grid md={6}><Typography pb={1} fontSize={14} fontWeight={600}>Product name</Typography></Grid>
                    <Grid container md={5} justifyContent={'space-between'}>
                        <Grid md={4}>
                            <Typography display={{ xs: 'none', md: 'block' }} fontSize={14} fontWeight={600}>REF</Typography>
                        </Grid>
                        <Typography fontSize={14} display={{ xs: 'none', md: 'block' }} fontWeight={600}>Price</Typography>
                        <Typography fontSize={14} display={{ xs: 'none', md: 'block' }} fontWeight={600}>Qty</Typography>
                        <Typography fontSize={14} display={{ xs: 'none', md: 'block' }} fontWeight={600}>Subtotal</Typography>
                    </Grid>

                </Grid>
                <Divider></Divider>
                <Grid py={1} container justifyContent={'space-between'}>
                    <Grid md={7}><Typography pb={1} fontWeight={500} fontSize={12}>KARIN HERZOG NEUTRAL OIL FACE AND BODY 100 ML PROFESSIONAL</Typography></Grid>
                    <Grid container md={5} justifyContent={'space-between'}>
                        <Grid md={3.5}>
                            <Typography display={{ xs: 'none', md: 'block' }} fontSize={12} fontWeight={500}>000000000000</Typography>
                        </Grid>
                        <Typography display={{ xs: 'none', md: 'block' }} fontSize={12} >$ 24.00</Typography>
                        <Typography display={{ xs: 'none', md: 'block' }} fontSize={12} >50</Typography>
                        <Typography display={{ xs: 'none', md: 'block' }} fontSize={12} >$ 1200.00</Typography>
                    </Grid>

                </Grid>
                <Divider></Divider>
                <Grid py={1} container justifyContent={'space-between'}>
                    <Grid md={6}><Typography pb={1} fontWeight={500} fontSize={12}>REFECTOCIL SENSITIVE DEVELOPER GEL 60 ML</Typography></Grid>
                    <Grid container md={5} justifyContent={'space-between'}>
                        <Grid md={3.5}>
                            <Typography display={{ xs: 'none', md: 'block' }} fontSize={12} fontWeight={500}>000000000000</Typography>
                        </Grid>
                        <Typography display={{ xs: 'none', md: 'block' }} fontSize={12} >$ 24.00</Typography>
                        <Typography display={{ xs: 'none', md: 'block' }} fontSize={12} >50</Typography>
                        <Typography display={{ xs: 'none', md: 'block' }} fontSize={12} >$ 1200.00</Typography>
                    </Grid>

                </Grid>
                {/* {props?.shipments && props?.shipments.items.map((item) => (
                            <>
                                <Divider></Divider>
                                <Typography>{item?.product_name}</Typography>
                            </>
                        ))} */}

            </Grid>
            <Grid container justifyContent={{ md: 'flex-start', xs: 'flex-end' }} alignItems={{ md: 'center', xs: 'flex-start' }}
                xs={12} md={6} order={{ md: 2, xs: 1 }} px={{ xs: 2, md: 4 }} sx={{ backgroundColor: { md: '#F6F6F6', xs: '#FFFF' }, height: { md: '126px', xs: '30px' } }}>
                <Button fullWidth sx={{ fontWeight: 700, maxWidth: '175px', color: '#2B3445', textTransform: 'none', fontSize: 14 }}
                    variant="text" startIcon={<PictureAsPdfOutlinedIcon />}>Download PDF</Button>
            </Grid>
            <Grid container justifyContent={{ md: 'flex-start', xs: 'flex-end' }} order={{ md: 3, xs: 3 }} alignItems={'center'} px={{ xs: 2, md: 4 }} md={6} xs={12} sx={{ backgroundColor: '#F6F6F6', height: '126px' }} gap={3}>
                <Grid pt={1} textAlign={'right'} md={7}>
                    <Typography fontSize={12}>
                        Subtotal
                    </Typography>
                    <Typography fontSize={12}>
                        Packing / costs / postage
                    </Typography>
                    <Typography fontSize={12}>
                        TAX
                    </Typography>
                    <Typography fontSize={12}>
                        Total
                    </Typography>

                </Grid>
                <Grid textAlign={'right'} pt={1} md={3} >
                    <Typography fontSize={12}>
                        $ 51,900.00
                    </Typography>
                    <Typography fontSize={12}>
                        $ 0.00
                    </Typography>
                    <Typography fontSize={12}>
                        $ 20.00
                    </Typography>
                    <Typography fontSize={12} fontWeight={600}>
                        $ 51,920.00
                    </Typography>

                </Grid>
            </Grid>
        </Grid>



    );
}

export default InvoiceDetails;