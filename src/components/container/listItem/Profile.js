import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { Button, Snackbar, Alert, Typography, Switch, FormControlLabel, TextField, MenuItem } from '@mui/material';
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
        if (data && data.customer) {
            const { firstname, lastname, email, date_of_birth } = data.customer;
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
        <form onSubmit={
            e => {
                e.preventDefault(),
                    updateCustomerInfo()

            }
        }>

            {dataLoading ?
                console.log("is loading")
                :
                <Grid md={5} container gap={2}>
                    {console.log(data.customer)}
                    <Typography variant="h1" fontSize="20px">Profile Information</Typography>
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
                            sx={{ width: 50 }}
                            size='medium'
                            checked={loading}
                            onChange={() => setLoading(!loading)}
                            color="primary"
                        />
                    </Grid>
                    <Grid container justifyContent={"space-between"}>
                        <Button variant='contained' type='submit' sx={{ fontSize: 11, width: '103px', borderRadius: "22px", backgroundColor: "#143E7D", color: "#fff" }}>update</Button>
                        <Button onClick={() => router.push("change-password")} sx={{ fontSize: 11, borderRadius: "22px", border: 'solid 1px black', backgroundColor: "white", color: "black" }}>Change Password</Button>
                        <Button sx={{ fontSize: 11, borderRadius: "22px", border: 'solid 1px black', backgroundColor: "white", color: "black" }}>Change email</Button>
                    </Grid>
                    <Snackbar onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={openSnackbar} autoHideDuration={1000} >
                        <Alert severity="success" sx={{ width: '100%' }}>
                            your Information was updated!
                        </Alert>
                    </Snackbar>

                </Grid>
            }

        </form >


    );
}

export default Profile;