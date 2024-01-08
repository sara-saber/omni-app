import { IconButton, Button, Divider, Grid, Typography } from "@mui/material";
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';

const ShipmentDetails = (props) => {
    return (
        <>
            {props?.shipments &&
            
                <Grid container gap={1.5} pt={4} >
                       {console.log(props?.shipments)}
                    <Grid mt={1} py={{xs:1,md:3}} pl={{xs:1.5,md:4}} sx={{ backgroundColor: '#F6F6F6' }} container gap={1}>
                        <Grid xs={5}>
                            <Typography fontSize={14} fontWeight={600} textTransform={'none'}>Tracking number(s)</Typography>
                            <Typography color={'#17468F'}>33 {props?.shipments.number}</Typography>
                        </Grid>
                        <Grid xs={6.6}>
                            <Button fullWidth sx={{ fontWeight: 700, color: '#2B3445', textTransform: 'none', fontSize: 14 }}
                                variant="text" startIcon={<PictureAsPdfOutlinedIcon />}>Download PDF</Button>
                        </Grid>
                    </Grid>
                    <Grid xs={12} p={{xs:2,md:4}}>
                        <Typography pb={1} fontWeight={500}>Product name</Typography>
                        <Divider></Divider>
                        <Typography pt={1}>ddd</Typography>
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