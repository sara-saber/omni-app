import { Drawer } from "@mui/material";
import { IconButton, Button, Divider, Grid, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
const CenterDrawer = (Props) => {
    return (
        <Drawer
            sx={{
                ".MuiDrawer-paper": {
                    mx: { md: Props?.mx, xs: '16px' },
                    mt: { md: Props?.mt, xs: '100px' },
                    borderRadius: "12px",
                    pb: { md: Props?.pb, xs: 1 }
                },
            }}
            anchor="top"
            open={Props.drawer}
            onClose={e => Props.setDrawer(false)}
        >
            <Grid alignItems={'center'} px={{ xs: 2, md: 4 }} pt={2} container justifyContent={'space-between'} >
                <Grid display={Props?.display} xs={5} md={5}>
                    <Typography fontSize={20} fontWeight={700}>
                        {Props?.name}
                    </Typography>
                </Grid>
                <Grid display={Props?.display} xs={6.2} textAlign={"right"} md={6}>
                    <IconButton onClick={(e) => Props.setDrawer(false)}>
                        <CloseIcon color="black" fontSize="large"></CloseIcon>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid pt={2} display={Props?.display} xs={12}>
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