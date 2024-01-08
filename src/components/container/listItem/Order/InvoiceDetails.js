import { Button, Divider, Grid, Typography } from "@mui/material";
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';

const InvoiceDetails = () => {
    return (

        <Grid container>
            <Grid xs={12} p={{ xs: 2, md: 4 }}>
                <Grid container justifyContent={'space-between'}>
                    <Grid md={4}><Typography pb={1} fontWeight={500}>Product name</Typography></Grid>
                    <Grid md={1}>
                        <Typography fontWeight={500}>REF</Typography>
                    </Grid>
                    <Typography fontWeight={500}>Price</Typography>
                    <Typography fontWeight={500}>Qty</Typography>
                    <Typography fontWeight={500}>Subtotal</Typography>
                </Grid>
                <Divider></Divider>
                <Grid pt={1} container justifyContent={'space-between'}>
                    <Grid md={3.5}><Typography pb={1} fontWeight={500}>GONE AWAY 0.5 OZ</Typography></Grid>
                    <Grid md={1}>
                        <Typography fontWeight={500}>000000</Typography>
                    </Grid>
                    <Typography fontWeight={500}>25</Typography>
                    <Typography fontWeight={500}>fff</Typography>
                    <Typography fontWeight={500}>ffffff</Typography>
                </Grid>
            
                {/* {props?.shipments && props?.shipments.items.map((item) => (
                            <>
                                <Divider></Divider>
                                <Typography>{item?.product_name}</Typography>
                            </>
                        ))} */}

            </Grid>
            <Grid px={{ xs: 2, md: 1 }} sx={{ backgroundColor: '#F6F6F6' }} container gap={3}>
                <Grid container alignItems={'center'} xs={5.7} md={7}>
                    <Button fullWidth sx={{ fontWeight: 700, maxWidth: '175px', color: '#2B3445', textTransform: 'none', fontSize: 14 }}
                        variant="text" startIcon={<PictureAsPdfOutlinedIcon />}>Download PDF</Button>
                </Grid>
                
                <Grid display={{md:'block',xs:'none'}} pt={1} textAlign={'right'} md={2}>
                    <Typography fontSize={12}>
                    Subtotal
                    </Typography>
                    <Typography fontSize={12}>
                    Packing / costs / postage
                    </Typography>
                    <Typography fontSize={12}>
                    TAX
                    </Typography>
                    <Typography  fontSize={12}>
                    Total
                    </Typography>

                </Grid>
                <Grid display={{md:'block',xs:'none'}} pt={1}  md={2} >
                    <Typography fontSize={12}>
                        xxx
                    </Typography>
                    <Typography fontSize={12}>
                        xx
                    </Typography>
                    <Typography fontSize={12}>
                        xxx
                    </Typography>
                    <Typography fontSize={12} fontWeight={500}>
                        xx
                    </Typography>

                </Grid>
            </Grid>
        </Grid>



    );
}

export default InvoiceDetails;