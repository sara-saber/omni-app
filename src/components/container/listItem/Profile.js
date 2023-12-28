import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { Avatar, Divider, Button, Snackbar, Alert, Typography, Switch, FormControlLabel, TextField, MenuItem } from '@mui/material';
import { useMutation, useQuery } from '@apollo/client';

import { Get_Customer_Info } from '@/graphql/Query';
import { Post_Update_Customer } from '@/graphql/Mutations';
import { useRouter } from 'next/router';

const Profile = () => {
    const [loading, setLoading] = useState(true)
    const [openSnackbar, setOpen] = useState(false)
    const { data, error, loading: dataLoading } = useQuery(Get_Customer_Info)
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
    }
    function handleClick() {
        setLoading(true);
    }
    return (
        <Grid container gap={2}>
            <Grid md={6} xs={12} container gap={2} alignItemst={"center"}>
                <Grid sx={{ display: { md: 'none', xs: 'flex' } }} xs={3}>
                    <Avatar>
                        <KeyboardBackspaceIcon onClick={() => router.push('my-account')} />
                    </Avatar>
                </Grid>
                <Grid xs={6}>
                    <Typography fontSize={20} fontWeight={700} justifyContent={{ xs: 'center', md: 'flex-start' }} pb={2}  >
                        Profile Information
                    </Typography>
                </Grid>
                <Grid display={{ md: 'none', xs: 'block' }} xs={12}>
                    <Divider />
                </Grid>
            </Grid>
            <form onSubmit={
                e => {
                    e.preventDefault(),
                        updateCustomerInfo()

                }
            }>

                {dataLoading ?
                    console.log("is loading")
                    :
                    <Grid md={5} container gap={2}
                        sx={{
                            '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
                                padding: 1.4
                            }
                            ,
                            '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                                padding: 1.4


                            },
                            '.css-md26zr-MuiInputBase-root-MuiOutlinedInput-root': {
                                borderRadius: '6px'
                            },

                        }}
                    >
                        {console.log(data?.customer)}

                        <TextField
                            fullWidth
                            label="Language"
                            defaultValue="English"
                            select
                        >
                            <MenuItem>
                                English
                            </MenuItem>
                        </TextField>
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
                            id="outlined-controlled"
                            label="Email"
                            type='email'
                            name='email'
                            onChange={e => handleChange(e)}
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
                        <Grid container gap={1} justifyContent={{ md: "space-between", sx: 'flex-start' }}>
                            <Grid md={2} xs={12}>
                                <Button variant='contained' type='submit' sx={{
                                    '&:hover': {
                                        backgroundColor: '#27325E'
                                    },
                                    textTransform: 'none',
                                    height: '40px',
                                    fontSize: 13, width: { md: '113px', xs: '100%' }, borderRadius: "22px", backgroundColor: "#143E7D", color: "#fff"
                                }}>Update</Button>
                            </Grid>
                            <Grid md={3}>
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
                                        fontSize: 13,
                                        borderRadius: "22px", border: 'solid 1px black', backgroundColor: "white", color: "black"
                                    }}
                                >Change Password</Button>
                            </Grid>
                            <Grid md={3} xs={12}>
                                <Button onClick={() => router.push("change-email")} sx={{
                                    '&:hover': {
                                        backgroundColor: '#143E7D',
                                        color: '#FFFFFF'
                                    },
                                    textTransform: 'none',
                                    width: { md: '100px', xs: '100%' },
                                    height: '40px',
                                    fontSize: 11, borderRadius: "22px", border: 'solid 1px black', backgroundColor: "white", color: "black"
                                }}>Change email</Button>
                            </Grid>
                        </Grid>
                        <Snackbar onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={openSnackbar} autoHideDuration={1000} >
                            <Alert severity="success" sx={{ width: '100%' }}>
                                your Information was updated!
                            </Alert>
                        </Snackbar>

                    </Grid>
                }

            </form >
        </Grid>

    );
}

export default Profile;