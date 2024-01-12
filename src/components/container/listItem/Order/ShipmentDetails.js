import { IconButton, Button, Divider, Grid, Typography, Box } from "@mui/material";
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import Link from "next/link";
// import file from '../../../../Files/file.pdf'
const ShipmentDetails = (props) => {
    return (
        <>
            {props?.shipments &&

                <Grid container gap={1.5} pt={4} >
                    {/* {console.log(props?.shipments)} */}
                    <Grid alignItems={'center'} mt={1} py={{ xs: 1, md: 1 }} px={{ xs: 1.5, md: 4 }} sx={{ backgroundColor: '#F6F6F6' }} container justifyContent={'space-between'}>
                        <Grid container gap={1} justifyContent={'flex-start'} xs={5} md={5}>
                            <Typography fontSize={14} fontWeight={600} textTransform={'none'}>Tracking number(s)</Typography>
                            <Typography color={'#17468F'}>33 {props?.shipments.number}</Typography>
                        </Grid>
                        <Grid textAlign={'right'} xs={6.6} md={6}>
                            {/* <Link  target="_blank"
                                to={file}
                                sx={{ fontWeight: 700, color: '#2B3445', textTransform: 'none', fontSize: 14 }}
                                variant="text" startIcon={<PictureAsPdfOutlinedIcon />}>Download PDF</Link> */}
                        </Grid>
                    </Grid>
                    <Grid xs={12} p={{ xs: 2, md: 4 }} container gap={1}>
                        <Grid container justifyContent={'space-between'}>
                            <Grid md={8}>
                                <Typography pb={1} fontWeight={600}>Product name</Typography>
                            </Grid>
                            <Grid md={3} container justifyContent={'space-between'}>
                                <Typography pb={1} fontWeight={600}>REF</Typography>
                                <Typography pb={1} fontWeight={600}>Qty</Typography>
                            </Grid>
                            <Grid md={12}>
                                <Divider></Divider>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={'space-between'}>
                            <Grid md={8}>
                                <Typography pb={1} fontWeight={400}>KARIN HERZOG NEUTRAL OIL FACE AND BODY 100 ML PROFESSIONAL</Typography>
                            </Grid>
                            <Grid md={3} container justifyContent={'space-between'}>

                                <Typography pb={1} fontWeight={600}>000000000000</Typography>
                                <Typography pb={1} fontWeight={600}>50</Typography>
                            </Grid>
                            <Grid md={12}>
                                <Divider></Divider>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={'space-between'}>
                            <Grid md={8}>
                                <Typography pb={1} fontWeight={400}>REFECTOCIL SENSITIVE DEVELOPER GEL 60 ML</Typography>
                            </Grid>
                            <Grid md={3} container justifyContent={'space-between'}>

                                <Typography pb={1} fontWeight={600}>000000000000</Typography>
                                <Typography pb={1} fontWeight={600}>500</Typography>
                            </Grid>
                            <Grid md={12}>
                                <Divider></Divider>
                            </Grid>
                        </Grid>

                        {/* {props?.shipments && props?.shipments.items.map((item) => (
                            <>
                                <Divider></Divider>
                                <Typography>{item?.product_name}</Typography>
                            </>
                        ))} */}

                    </Grid>


                </Grid>

            }
        </>


    );
}

export default ShipmentDetails;