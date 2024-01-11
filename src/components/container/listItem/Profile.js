import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import Grid from '@mui/material/Grid';
import { use, useEffect, useState } from 'react';
import { Avatar, Divider, Button, Snackbar, Alert, Typography, Switch, FormControlLabel, TextField, MenuItem, Box, useMediaQuery } from '@mui/material';
import { useMutation, useQuery } from '@apollo/client';

import { Get_Customer_Info } from '@/graphql/Query';
import { Post_Update_Customer } from '@/graphql/Mutations';
import { useRouter } from 'next/router';
import PageName from './shared/PageName/PageName';
import CenterDrawer from './shared/Drawer/CenterDrawer';
import ChangeEmail from './ChangeEmail';

const Profile = () => {
    const [loading, setLoading] = useState(true)
    const [openSnackbar, setOpen] = useState(false)
    const [drawer, setDrawer] = useState()
    const { data, error: InfoError, loading: dataLoading } = useQuery(Get_Customer_Info)
    const screenSize = useMediaQuery('(max-width:768px)')
    const router = useRouter()
    const handleClose = () => {
        setTimeout(() => {
            setOpen(false)
        }, 100)

    }

    const [customerInfo, setCustomerInfo] = useState()

    useEffect(() => {
        if (data && data?.customer) {
            const { firstname, lastname, email, date_of_birth } = data?.customer;
            setCustomerInfo({
                firstname,
                lastname,
                email,
                date_of_birth
            });
        }
    }, [data]);

    const [createCustomerInfo, { data: updatedData }] = useMutation(Post_Update_Customer)
    const handleChange = (e) => {
        const { name, value } = e.target
        setCustomerInfo(() => ({
            ...customerInfo,
            [name]: value
        }))
    }
    const updateCustomerInfo = () => {
        // console.log(customerInfo);
        createCustomerInfo({ variables: { Customerinfo: customerInfo }, onCompleted: (setOpen(true)) })
        setTimeout(() => {
            router.push('profile-information')
        }, 500)
        if (InfoError) {

        }
    }
    function handleClick() {
        setLoading(true);
    }
    return (
        <Grid container gap={0.5}>
            <PageName name={'Profile Information'} url={'/my-account/dashboard'} position={'center'}></PageName>
            <form onSubmit={
                e => {
                    e.preventDefault(),
                        updateCustomerInfo()

                }
            }>

                {dataLoading ?
                    console.log("is loading")
                    :
                    <Grid lg={6} md={12} container gap={'25px'}
                        sx={{
                            '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
                                padding: 1.4
                            }
                            ,
                            '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                                padding: 1.4


                            },
                            '.MuiOutlinedInput-root': {
                                borderRadius: '6px'
                            },

                        }}
                    >
                        {console.log(data?.customer)}
                        <TextField
                            fullWidth
                            label="First name"
                            value={customerInfo?.firstname}
                            name='firstname'
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            value={customerInfo?.lastname}
                            fullWidth
                            id="outlined-controlled"
                            label="Last name"
                            name='lastname'
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            value={customerInfo?.email}
                            fullWidth
                            disabled
                            id="outlined-controlled"
                            label="Email"
                            type='email'
                            name='email'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            fullWidth
                            id="outlined-controlled"
                            label="Date of Brith"
                            type='date'
                            value={customerInfo?.date_of_birth}
                            name='date_of_birth'
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Grid container alignItems={"center"} justifyContent={"space-between"}>
                            <Typography>Subscribe to our newletter</Typography>
                            <Switch
                                sx={{
                                    ".css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked ": {
                                        color: "#17468F"
                                    },
                                    width: 50
                                }}
                                size='medium'
                                checked={loading}
                                onChange={() => setLoading(!loading)}
                            />
                        </Grid>
                        <Grid sx={{
                            '.MuiButton-root':{
                                height:{xs:50,md:43}
                            }
                        }} container gap={{md:0,xs:3}} justifyContent={{ md: "space-between", sx: 'flex-start' }}>
                            <Grid md={3} xs={12}>
                                <Button variant='contained' type='submit' sx={{
                                    '&:hover': {
                                        backgroundColor: '#27325E'
                                    },
                                    textTransform: 'none',
                                    height: '40px',
                                    fontWeight: 200,
                                    fontSize: 14, width: { md: '113px', xs: '100%' }, borderRadius: "22px", backgroundColor: "#143E7D", color: "#fff"
                                }}>Update</Button>
                            </Grid>
                            <Grid md={9} container gap={1.3} justifyContent={'flex-end'}>
                                <Button onClick={() => router.push("change-password")}

                                    sx={{
                                        display: { md: "inline", xs: 'none' },
                                        '&:hover': {
                                            backgroundColor: '#143E7D',
                                            color: '#FFFFFF'
                                        },
                                        textTransform: 'none',
                                        width: '156px',
                                        height: '40px',
                                        fontSize: 14,
                                        borderRadius: "22px", border: 'solid 1px black', backgroundColor: "white", color: "black"
                                    }}
                                >Change Password</Button>
                                <Button  onClick={() => screenSize ? router.push("change-email") : setDrawer(true)} sx={{
                                    '&:hover': {
                                        backgroundColor: '#143E7D',
                                        color: '#FFFFFF'
                                    },
                                    textTransform: 'none',
                                    minWidth: { md: '125px', xs: '100%' },
                                    height: '40px',
                                    fontSize: 14, borderRadius: "22px", border: 'solid 1px black', backgroundColor: "white", color: "black"
                                }}>Change email</Button>
                            </Grid>
                            {
                                drawer &&
                                <CenterDrawer 
                                mt='10%'
                                mx='35%'
                                pb={5}
                                position='center' display='none' name='Change Email' drawer={drawer} setDrawer={setDrawer}>
                                    <Box p={5} alignItems={'center'} display={'flex'} justifyContent={'center'}>
                                        <ChangeEmail></ChangeEmail>
                                    </Box>
                                </CenterDrawer>

                            }

                            {/* <Grid md={3} xs={12}>
                                <Button onClick={() => router.push("change-email")} sx={{
                                    '&:hover': {
                                        backgroundColor: '#143E7D',
                                        color: '#FFFFFF'
                                    },
                                    textTransform: 'none',
                                    minWidth: { md: '125px', xs: '100%' },
                                    height: '40px',
                                    fontSize: 14, borderRadius: "22px", border: 'solid 1px black', backgroundColor: "white", color: "black"
                                }}>Change email</Button>
                            </Grid> */}
                        </Grid>
                        {
                            !InfoError &&
                            <Snackbar onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={openSnackbar} autoHideDuration={1000} >
                                <Alert severity="success" sx={{ width: '100%' }}>
                                    your Information was updated!
                                </Alert>
                            </Snackbar>
                        }

                    </Grid>
                }

            </form >


        </Grid>

    );
}

export default Profile;