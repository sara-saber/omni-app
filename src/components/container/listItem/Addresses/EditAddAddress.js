import { useRouter } from "next/router";
import PageName from "../shared/PageName/PageName";
import { Button, Typography, Grid, TextField, FormControlLabel, Switch, IconButton } from "@mui/material"
import { useMutation } from "@apollo/client";
import { Create_Customer_Address } from "@/graphql/Mutations";
import { useState } from "react";
import { Get_Customer_Addresses } from "@/graphql/Query";
const EditAddresses = (props) => {
    const router = useRouter()
    const pageName = router.query.pageName
    console.log(pageName);
    const [createAddress, { data, loading: dataLoading, error }] = useMutation(Create_Customer_Address)
    const [addressInput, setAddressInput] = useState()
    const [loading, setLoading] = useState(true)
    const handleChange = (e) => {
        const { name, value } = e.target
        setAddressInput(() => ({
            ...addressInput,
            [name]: value
        }))
    }

    const addAddress = () => {
        createAddress({
            variables: {
                 InputAdress:addressInput
            },
            refetchQueries: [
                { query: Get_Customer_Addresses }
            ]
        })
    }
    return (
        <>
            <Grid display={{ md: 'none', xs: 'flex' }}>
                <PageName name={pageName || props?.name} url='/my-account/addresses' position='center' >
                </PageName>
            </Grid>
            <Grid mt={{md:0,xs:2}} mb={{md:0,xs:20}}
                sx={{
                    '.MuiOutlinedInput-root': {
                        borderRadius: '6px'
                    },
                    '.MuiInputLabel-root': {
                        fontSize: '1rem'
                    }
                }}
                container gap={2} md={12} xs={12}>


                <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="First name"
                    name='firstname'
                    type='text'
                    onChange={handleChange} >

                </TextField>


                <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Last name"
                    name='lastname'
                    type='text'
                    onChange={handleChange}  >

                </TextField>


                <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Phone number"
                    name='telephone'
                    type='number'
                    onChange={handleChange}  >


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
                            name='postacode'
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
                            value=''
                            type='text'
                            onChange={handleChange}  >


                        </TextField>
                    </Grid>
                </Grid>
                <Grid container justifyContent={'space-between'} alignItems={'center'}>
                    <Grid item md={8}>
                        <Typography>
                            Set as default Shipping address
                        </Typography>
                    </Grid>
                    <Grid display='flex' justifyContent='flex-end' md={3.5}>
                        <Switch
                            sx={{
                                width: 50
                            }}
                            size='medium'
                            name='default_shipping'
                            checked={loading}
                            id='1'
                            onChange={(e) => (e.id==='1'?null:setLoading(!loading), handleChange)}
                        />
                    </Grid>
                </Grid>
                <Grid container justifyContent={'space-between'} alignItems={'center'}>
                    <Grid item md={8}>
                        <Typography>
                            Set as default billing address
                        </Typography>
                    </Grid>
                    <Grid display='flex' justifyContent='flex-end' md={3}>
                        <Switch
                            sx={{
                                width: 50
                            }}
                            size='medium'
                            name="default_billing"
                            id='2'
                            checked={loading}
                            onChange={(e) => (e.id==='2'?null:setLoading(!loading), handleChange)}
                        />
                    </Grid>
                </Grid>
                <Grid container justifyContent='space-between' rowGap={2} md={12} mt={2}>
                    <Grid textAlign='right' pr={2} md={6} xs={12}>
                        <Button sx={{
                            width: { md: 95, xs: '100%' },
                            '&:hover': {
                                backgroundColor: '#143E7D',
                                color: '#FFFFFF',
                            },
                            textTransform: 'none',
                            fontWeight: 500,
                            height: 43,
                            borderRadius: 22, backgroundColor: "#17468F"
                        }} type="submit" variant="contained" onClick={()=>(pageName === 'Add Address' ? addAddress() : null)}>
                            Save
                        </Button>
                    </Grid>
                    <Grid textAlign={{md:'left',xs:'center'}} pr={2} md={6} xs={12}>
                        <Button type="button" onClick={() => router.push("/my-account/profile-information")} sx={{
                            '&:hover': {
                                backgroundColor: '#143E7D',
                                color: '#FFFFFF'
                            },
                            textTransform: 'none',
                            fontWeight: 500,
                            width: {md:'111px',xs:200},
                            height: 35
                            , borderRadius: 22, borderColor: "#2B3445", color: '#2B3445'
                        }} variant="outlined">
                            Cancel
                        </Button>

                    </Grid>

                </Grid>
            </Grid>
        </>

    );
}

export default EditAddresses;