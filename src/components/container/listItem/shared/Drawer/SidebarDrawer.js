import { Divider, Drawer, Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
const SideBarDrawer = (props) => {
    const [loading, setLoading] = useState(true)
    const [address, setAddress] = useState()
    return (
        <Drawer
            anchor={props?.anchor}
            open={props.drawer}
            onClose={e => props.setDrawer(false)}
        >
            <Grid px={6} py={3} gap={2}  sx={{
                    width: { md: 600, xs: 420 },
                    p: {md:'60px',xs:'0'},
                }} container justifyContent={'space-between'}>
                <Grid md={5}>
                    <Typography fontSize={20} fontWeight={600}>
                        {props?.name}
                    </Typography>
                </Grid>
                <Grid textAlign={'right'} md={5}>
                    <IconButton onClick={(e) => props?.setDrawer(false)}>
                        <CloseIcon></CloseIcon>
                    </IconButton>

                </Grid>
                <Grid md={12}>
                <Divider></Divider>
                </Grid>
                {props?.children}
            </Grid>
         
        </Drawer>



    );
}

export default SideBarDrawer;