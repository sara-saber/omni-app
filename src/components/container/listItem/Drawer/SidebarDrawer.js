import { Button } from "@mui/joy";
import { Divider, Typography, Grid, TextField, FormControlLabel, Switch, Drawer, IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
const SideBarDrawer = (props) => {
    const [loading, setLoading] = useState(true)
    const [address, setAddress] = useState()
    return (
        <Drawer
            anchor="right"
            open={props.drawer}
            onClose={e => props.setDrawer(false)}
        >
            <Grid
                container gap={2} md={12} xs={12}
                sx={{
                    width: { md: 600, xs: 420 },
                    p: '60px',
                }}>
                <Grid md={10}>
                    <Typography>
                        Edit address
                    </Typography>
                </Grid>
                <Grid md={1}>
                    <IconButton onClick={(e) => props.setDrawer(false)}>
                        <CloseIcon></CloseIcon>
                    </IconButton>

                </Grid>
                <Divider></Divider>
                <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="First name"
                    type='text' >

                </TextField>


                <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Last name"
                    type='text' >

                </TextField>


                <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Phone number"
                    type='number' >

                </TextField>


                <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Address line 1"
                    type='text' >

                </TextField>


                <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Address line (optional)"
                    type='text' >

                </TextField>

                <Grid md={5}>
                    <TextField
                        fullWidth
                        id="outlined-controlled"
                        select
                        SelectProps={{
                            multiple: false,
                            value: []
                        }}
                        label="Country"
                        type='text' >

                    </TextField>
                </Grid>
                <Grid md={5}>
                    <TextField
                        select
                        SelectProps={{
                            multiple: false,
                            value: []
                        }}
                        fullWidth
                        id="outlined-controlled"
                        label="State"
                        type='text' >
                    </TextField>
                </Grid>
                <Grid item md={5}>
                    <TextField
                        fullWidth
                        id="outlined-controlled"
                        label="Postal Code"
                        type='text' >

                    </TextField>
                </Grid>
                <Grid md={5}>
                    <TextField
                        select
                        SelectProps={{
                            multiple: false,
                            value: []
                        }}
                        fullWidth
                        id="outlined-controlled"
                        label="City"
                        type='text' >

                    </TextField>
                </Grid>
                <Grid item md={6}>
                    <Typography>
                        Set as default billing address1
                    </Typography>
                </Grid>
                <Grid display='flex' justifyContent='flex-end' md={5}>
                    <FormControlLabel
                        sx={{
                            display: 'flex',
                        }}
                        control={
                            <Switch
                                checked={loading}
                                name="loading"
                                color="primary"
                            />
                        }
                    />
                </Grid>
                <Grid item md={6}>
                    <Typography>
                        Set as default billing address1
                    </Typography>
                </Grid>
                <Grid display='flex' justifyContent='flex-end' md={5}>
                    <FormControlLabel
                        sx={{
                            display: 'flex',
                        }}
                        control={
                            <Switch
                                checked={loading}
                                name="loading"
                                color="primary"
                            />
                        }
                    />
                </Grid>
                <Grid container justifyContent='space-between' md={12}>
                    <Grid textAlign='right' pr={2} md={6}>
                        <Button color="primary" sx={{ borderRadius: '22px', width: "95px" }}>
                            Save
                        </Button>
                    </Grid>
                    <Grid textAlign='left' pr={2} md={6}>
                        <Button color="secondary" sx={{ borderRadius: '22px', width: '111px', border: '2px solid #2B3445' }} >
                            Cancel
                        </Button>

                    </Grid>

                </Grid>
            </Grid>
        </Drawer>



    );
}

export default SideBarDrawer;