import PageName from "../shared/PageName/PageName";
import { Button, Typography, Grid, TextField, FormControlLabel, Switch, IconButton } from "@mui/material"
const EditAddresses = () => {
    return (
        <>
            <Grid display={{ md: 'none', xs: 'flex' }}>
                <PageName name='Edit address' url='addresses' position='center' >
                </PageName>
            </Grid>
            <Grid
                sx={{
                    '.MuiOutlinedInput-root': {
                        borderRadius: '6px'
                    },
                    '.MuiInputLabel-root': {
                        fontSize: '0.2rem'
                    }
                }}
                container gap={2} md={12} xs={12}>


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
                <Grid md={12} container gap={2} justifyContent={'space-between'}>
                    <Grid md={5.7} xs={12}>
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
                    <Grid md={5.7} xs={12}>
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
                </Grid>
                <Grid md={12} container justifyContent={'space-between'}>
                    <Grid md={5.7} xs={5.6}>
                        <TextField
                            fullWidth
                            id="outlined-controlled"
                            label="Postal Code"
                            type='text' >

                        </TextField>
                    </Grid>
                    <Grid md={5.7} xs={5.6}>
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
                </Grid>
                <Grid container justifyContent={'space-between'}>
                    <Grid item md={8}>
                        <Typography>
                            Set as default billing address1
                        </Typography>
                    </Grid>
                    <Grid display='flex' justifyContent='flex-end' md={3.5}>
                        <FormControlLabel
                            sx={{
                                display: 'flex',
                            }}
                            control={
                                <Switch

                                    name="loading"
                                    color="primary"
                                />
                            }
                        />
                    </Grid>
                </Grid>
                <Grid container justifyContent={'space-between'}>
                    <Grid item md={8}>
                        <Typography>
                            Set as default billing address1
                        </Typography>
                    </Grid>
                    <Grid display='flex' justifyContent='flex-end' md={3}>
                        <FormControlLabel
                            sx={{
                                display: 'flex',
                            }}
                            control={
                                <Switch

                                    name="loading"
                                    color="primary"
                                />
                            }
                        />
                    </Grid>
                </Grid>
                <Grid container justifyContent='space-between' md={12}>
                    <Grid textAlign='right' pr={2} md={6}>
                        <Button sx={{ borderRadius: '22px', width: "95px" }}>
                            Save
                        </Button>
                    </Grid>
                    <Grid textAlign='left' pr={2} md={6}>
                        <Button sx={{ borderRadius: '22px', width: '111px' }} >
                            Cancel
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
        </>

    );
}

export default EditAddresses;