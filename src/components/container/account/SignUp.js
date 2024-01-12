import { Checkbox, Typography, Grid, MenuItem, TextField, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { use, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';


import { useRouter } from 'next/router';
import { Get_Countries } from '@/graphql/Query';
import { Post_Create_Cutomer, Post_create_Addresses } from '@/graphql/Mutations';
const SignUp = () => {
    const router = useRouter()
    const [customer, setCustomer] = useState()
    const [country, setCountry] = useState()
    const [regions, setRegion] = useState([])
    const [showPassword, setShowPassword] = useState(false)
    const [snackbarState, setSnackbarState] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center'
    })
    const { vertical, horizontal, open } = snackbarState
    const { data: countries, loading: isLoading, error: countries_error } = useQuery(Get_Countries)
    const [createCustomer, { data: CustomerData, error: CustomerError }] = useMutation(Post_Create_Cutomer)
    const [createCustomerAddress, { data: addressData, error: AddressError }] = useMutation(Post_create_Addresses)
    const handlePasswordIcon = () => {
        setShowPassword(!showPassword)

    }
    useEffect(() => {
        if (countries) {
            setRegion(countries?.countries[0].available_regions)
            setCountry(countries?.countries[0]?.full_name_english)
            console.log(country)
            console.log(regions)
        }
        if (isLoading) {
            console.log('Be loading');
        }
    }, [countries])


    const handleChange = (e) => {
        const { name, value } = e.target
        setCustomer(() => ({
            ...customer,
            [name]: value
        }))

    }
    const customerInput = {
        firstname: customer?.firstname,
        lastname: customer?.lastname,
        email: customer?.email,
        password: customer?.password,
        date_of_birth: customer?.date_of_birth,

    }

    const addressInput = {
        firstname: customer?.firstname,
        telephone: customer?.telephone,
        city: customer?.city,
        postcode: customer?.postcode,
        street: customer?.street,
        country_id: customer?.country_id
    }
    const createNewCustomer = () => {
        // console.log(customer)
        // console.log(customerInput)
        // console.log(addressInput);
        createCustomer({
            variables: { Customer: customerInput }, onCompleted: (
                createCustomerAddress({ variables: { CustomerAddress: addressInput, onCompleted: (router.push("/account/login")) } })
            )

        })
        if (CustomerError) {

        }
        if (AddressError) {

        }
    }

    return (
        <form onSubmit={e => {
            e.preventDefault()
            createNewCustomer()
        }}>

            <Grid container md={12} xs={12} gap={2}
                sx={{
                    '.MuiFormLabel-root-MuiInputLabel-root': {
                        width: '100px'
                    },
                    '.MuiOutlinedInput-input': {
                        padding: 1.5
                    },
                    '.MuiOutlinedInput-root': {
                        borderRadius: '6px'
                    },
                    '.MuiInputLabel-root': {
                        fontSize: '16px',
                        fontWeight:'400',
                        color:'#4C4C4C'
                    }
                    
                }}
            >
                <Grid fullWidth>
                    {countries_error &&

                        <Box>
                            <Snackbar sx={{ display: 'contents' }} anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={200}>
                                <Alert severity="error" >
                                    {countries_error?.message}
                                </Alert>
                            </Snackbar>
                        </Box>
                    }
                    <Typography pt={3} level="text-sm">You are looking for the best products in order to make a better version of yourself.</Typography>
                </Grid>
                <Grid container justifyContent={'space-between'} md={12}>
                    <Grid md={5.8} xs={5.8}>
                        <TextField
                            fullWidth
                            required
                            id="outlined-controlled"
                            label="First Name"
                            name='firstname'
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid md={5.8} xs={5.8}>
                        <TextField
                            fullWidth
                            id="outlined-controlled"
                            label="Last Name"
                            name="lastname"
                            onChange={handleChange}
                        />
                    </Grid>

                </Grid>
                {/* <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Country"
                    name='country_id'
                    value={country}
                    onChange={handleChange}
                >

                </TextField> */}

                <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Region"
                    select
                    value={country}
                    onChange={handleChange}
                >
                    {regions?.map((item) => (
                        <MenuItem key={item.id} value={item.name}>
                            {item.name}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    fullWidth
                    required
                    id="outlined-controlled"
                    name='street'
                    onChange={handleChange}
                    label="address line 1"
                />


                <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Address line 2 (optional)"
                />

                <Grid container justifyContent={'space-between'} >
                    <Grid md={5.8} xs={5.8}>
                        <TextField
                            fullWidth
                            required
                            name='city'
                            onChange={handleChange}
                            id="outlined-controlled"
                            label="City"
                        />
                    </Grid>
                    <Grid md={5.8} xs={5.8}>
                        <TextField
                            fullWidth
                            required
                            id="outlined-controlled"
                            label="zip Code"
                            name='postcode'
                            onChange={handleChange}
                            type='number'
                        />

                    </Grid>
                </Grid>

                <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Phone number"
                    type='phone'
                />
                <TextField
                    fullWidth
                    id="outlined-controlled"
                    type='phone'
                    name='telephone'
                    onChange={handleChange}
                    label="Cell Phone"
                />

                <TextField
                    fullWidth
                    id="outlined-controlled"
                    type='date'
                    name='date_of_brith'
                    onChange={handleChange}
                    hiddenLabel
                />

                <TextField
                    fullWidth
                    required
                    id="outlined-controlled"
                    label="Email"
                    name='email'
                    onChange={handleChange}
                    type='email'
                />

                <TextField
                    fullWidth
                    id="input-with-icon-textfield"
                    label="Password"
                    name='password'
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                    showPassword ?
                                        <VisibilityOutlinedIcon onClick={handlePasswordIcon} />
                                        :
                                        <VisibilityOffIcon onClick={handlePasswordIcon} />

                                }
                            </InputAdornment>
                        ),
                    }}


                />
                <Grid container alignItems={"flex-start"} sx={{
                    '.css-1fi1jt2-MuiButtonBase-root-MuiCheckbox-root': {
                        padding: 0
                    },

                }}>
                    <Grid md={1} xs={1}>
                        <Checkbox sx={{ alignItems: "start" }} />
                    </Grid>
                    <Grid md={10.9} xs={11}>
                        <Typography fontSize={13} >
                            By selecting Create account, you are confirming that you have read and agree to eec.inc Terms of Use and Privacy Policy.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems={"flex-start"} sx={{
                    '.css-1fi1jt2-MuiButtonBase-root-MuiCheckbox-root': {
                        padding: 0
                    },

                }}>
                    <Grid md={1} xs={1}>
                        <Checkbox p={0} sx={{ alignItems: "start" }} ></Checkbox>
                    </Grid>
                    <Grid md={10.9} xs={11}>
                        <Typography fontSize={13}>
                            Subscribe to our newsletter and receive promotions based on products added to my cart.   </Typography>
                    </Grid>
                </Grid>

                <Grid pt={2} md={12} xs={12} >
                    <Button disabled={CustomerError && AddressError} variant="contained" fullWidth type='submit' sx={{
                        '&:hover': {
                            backgroundColor: '#17468F'
                        },
                        textTransform: 'none',
                        height: 50, borderRadius: "25px", backgroundColor: '#17468F'
                    }}>Create account</Button>
                </Grid>

            </Grid>
        </form >

    )


}

export default SignUp;