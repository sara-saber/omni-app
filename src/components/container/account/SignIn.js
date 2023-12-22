import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { Grid, Box, Link, TextField, FormGroup, FormControlLabel, Checkbox, CardActions } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { Login } from '@/graphql/Mutations';


const SignIn = () => {
    const router = useRouter()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [login, { loading, error }] = useMutation(Login)
    const handlePasswordIcon = () => {
        setShowPassword(!showPassword)

    }
    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         setToken(token)
    //     }
    // }, [token])
    const Signin = async (e) => {
        e.preventDefault();
        const data = await login({ variables: { email: email, password: password } })
        console.log(data.data);
        if (loading) {
            setTimeout(() => {
                console.log('is loading');
            }, 1000)
        }

        const newToken = data.data?.generateCustomerToken?.token
        if (newToken) {
            localStorage.setItem('token', newToken)
            router.push('my-account/dashboard')
        }

    }

    return (

        <Grid container md={12} xs={12} gap={1}>
            <Typography width='100%' level="h2">
                Welcome to Omniadis
            </Typography>
            <Typography level="text-sm">Sign in with email & password!</Typography>
            <Grid fullWidth></Grid>
            <form width="100%" onSubmit={e =>
                Signin(e)
            }>

                <Grid container gap={2}>
                    <TextField
                        fullWidth
                        id="outlined-controlled"
                        label="Email"
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        id="outlined-controlled"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        onChange={e => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    {
                                        showPassword ?
                                            <VisibilityOutlinedIcon onClick={handlePasswordIcon} />
                                            :
                                            <VisibilityOffIcon onClick={handlePasswordIcon} />}
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Button fullWidth type='submit' sx={{ mt: 2 /* margin top */, height: "50px", borderRadius: "25px", backgroundColor: "#143E7D" }}>Sign in</Button>

                <Grid container justifyContent='space-between' pt={2} alignItems={'center'}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Remember me" />
                    </FormGroup>

                    <Typography
                        onClick={() => router.push("/resetpassword")}
                        fontSize="sm"
                    >
                        ForgetPassword
                    </Typography>
                </Grid>

            </form >
        </Grid>


    );
}

export default SignIn;