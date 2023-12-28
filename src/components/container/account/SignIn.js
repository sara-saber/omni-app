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
            router.push('/my-account/dashboard')
        }

    }

    return (
        <Grid container gap={1}>
            <Grid md={12} xs={12}>
                <Typography sx={{
                    color: 'var(--black)',
                    fontWeight: '750'
                }} >
                    Welcome to Omniadis
                </Typography>
            </Grid>
            <Grid md={12} xs={12}>
                <Typography fontWeight={550}>Sign in with email & password!</Typography>
            </Grid>
            <form fullWidth onSubmit={e =>
                Signin(e)
            }>
                <Grid container gap={1}>
                    <Grid container md={12} xs={12} gap={2}

                        sx={{
                            '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                                padding: 1.5
                            },
                            '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
                                width: '100'
                            },
                            '.css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
                                padding: 1.5
                            },
                            '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                borderRadius: '6px'
                            },
                            '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
                                fontSize: '0.9rem'
                            }
                        }}
                    >
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
                    <Button fullWidth type='submit' sx={{
                        '&:hover': {
                            backgroundColor: '#17468F'
                        },
                        mt: 2 /* margin top */, height: "50px", borderRadius: "25px", backgroundColor: "#143E7D"
                    }}>Sign in</Button>
                    <Grid container justifyContent='space-between' pt={1} alignItems={'center'}>
                        <Box display={'flex'} width={200} alignItems={'center'}>
                            <Checkbox sx={{ borderColor: "#B7B7B7" }}></Checkbox>
                            <Typography fontWeight={400}> Remember me</Typography>
                        </Box>
                        <Link
                        color='#2B3445'
                            href='/account/resetpassword'
                            fontSize={'14px'}
                            fontWeight={500}
                        >
                            Forget Password
                        </Link>
                    </Grid>
                </Grid>
            </form>

        </Grid>


    );
}

export default SignIn;