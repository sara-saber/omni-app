import { Drawer } from "@mui/material";
import { IconButton, Button, Divider, Grid, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
const CenterDrawer = (Props) => {
    return (
        <Drawer
            sx={{
                ".MuiDrawer-paper": {
                    mx: { md: '25%', xs: '16px' },
                    mt: { md: '2%', xs: '100px' },
                    borderRadius: "12px",
                    pb: { md: 25, xs: 1 }
                },
            }}
            anchor="top"
            open={Props.drawer}
            onClose={e => Props.setDrawer(false)}
        >
            <Grid alignItems={'center'} pl={{ xs: 2, md: 4 }} pt={2} container gap={1} >
                <Grid xs={5} md={5}>
                    <Typography fontSize={20} fontWeight={600}>
                        {Props?.name}
                    </Typography>
                </Grid>
                <Grid xs={6.2} textAlign={"right"} md={6}>
                    <IconButton onClick={(e) => props.setDrawer(false)}>
                        <CloseIcon fontSize="large"></CloseIcon>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid xs={12}>
                <Divider>
                </Divider>
            </Grid>
            <Grid>
                {Props.children}
            </Grid>
        </Drawer>
    );
}

export default CenterDrawer;