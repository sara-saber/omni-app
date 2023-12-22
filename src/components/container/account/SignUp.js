import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { Grid, MenuItem, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
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
    const { data: countries, loading: isLoading, error: countries_error } = useQuery(Get_Countries)
    const [createCustomer, { data: CustomerData }] = useMutation(Post_Create_Cutomer)
    const [createCustomerAddress, { data: addressData }] = useMutation(Post_create_Addresses)
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
                createCustomerAddress({ variables: { CustomerAddress: addressInput, onCompleted: (router.push("/login")) } })
            )
        })
    }

    return (
        <form onSubmit={e => {
            e.preventDefault()
            createNewCustomer()
        }}>
            <Grid container gap={2} justifyContent={'center'}>
                <Grid md={12}>
                    <Typography level="text-sm">You are looking for the best products in order to make a better version of yourself.</Typography>
                </Grid>
                <TextField
                    sx={{
                        borderRadius: "6px"
                    }}
                    fullWidth
                    required
                    id="outlined-controlled"
                    label="First Name"
                    name='firstname'
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Last Name"
                    name="lastname"
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Country"
                    name='country_id'
                    value={country}
                    onChange={handleChange}
                >

                </TextField>

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
                <Grid md={5.6}>
                    <TextField
                        required
                        name='city'
                        onChange={handleChange}
                        id="outlined-controlled"
                        label="City"
                    />

                </Grid>
                <Grid md={5.9}>

                    <TextField
                        required
                        id="outlined-controlled"
                        label="zip Code"
                        name='postcode'
                        onChange={handleChange}
                        type='number'
                    />

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
                    type='password'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {/* {
                                    showPassword ?
                                        <VisibilityOutlinedIcon onClick={setShowPassword(!showPassword)} />
                                        :
                                        <VisibilityOffIcon onClick={setShowPassword(!showPassword)} />

                                } */}
                            </InputAdornment>
                        ),
                    }}


                />
                {/* <Grid >
                    <Checkbox defaultChecked />
                    <Typography>
                        By selecting Create account, you are confirming that you have read and agree to eec.inc Terms of Use and Privacy Policy.
                    </Typography>
                </Grid> */}
                <Grid container alignItems={'center'} gap={2}>

                    <FormControlLabel
                        control={<Checkbox defaultChecked />}

                        label="By selecting Create account, you are confirming that you have read and agree to eec.inc Terms of Use and Privacy Policy." />

                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Subscribe to our newsletter and receive promotions based on products added to my cart." />

                </Grid>
                <Button fullWidth type='submit' sx={{ height: 50, borderRadius: "25px", backgroundColor: "#143E7D" }}>Create account</Button>

            </Grid>
        </form >

    )


}

export default SignUp;