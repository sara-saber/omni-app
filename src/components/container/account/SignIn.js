import { Alert, Snackbar, Grid, Box, TextField, FormGroup, FormControlLabel, Checkbox, CardActions, FormHelperText, CircularProgress, Typography, Button } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { Login } from '@/graphql/Mutations';
import Link from 'next/link'


const SignIn = () => {
    const router = useRouter()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [login, { loading: loginLoading, error: loginError }] = useMutation(Login, { errorPolicy: "all" })
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [loadingIcon, setLoadingIcon] = useState(false)
    const [snackbarState, setSnackbarState] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center'
    })
    const { vertical, horizontal, open } = snackbarState
    const handlePasswordIcon = () => {
        setShowPassword(!showPassword)

    }
    const Signin = async (e) => {
        e.preventDefault();
        const data = await login({ variables: { email: email, password: password } })
        console.log(data.data);
        if (loginLoading) {
            setTimeout(() => {
                setLoadingIcon(!loadingIcon)
                console.log(loadingIcon);
            }, 1000)

        }
        if (loginError) {
            console.log(loginError.message);
            // loginError.message.includes("$email")?setEmailError(true):( loginError.message.includes("$password")?setPassword(true):null)
            setLoadingIcon(!loadingIcon)
            setSnackbarState({
                ...snackbarState, open: true
            })
        }
        const newToken = data.data?.generateCustomerToken?.token
        if (newToken) {
            document.cookie = `token=${newToken}; path=/`
            // localStorage.setItem('token', newToken)
            router.push('/my-account/dashboard')
        }
        email ? setEmailError(false) : setEmailError(true)
        password ? setPasswordError(false) : setPasswordError(true)
    }

    return (
        <Grid container gap={1} pt={3}>
            <Grid md={12} xs={12}>
                <Typography sx={{
                    color: 'var(--black)',
                    fontWeight: '750'
                }} >
                    Welcome to Omniadis
                </Typography>
                {loginError?.message.includes('incorrect') &&

                    <Box>
                        <Snackbar sx={{ display: 'contents' }} anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={200}>
                            <Alert severity="error" >
                                {loginError?.message}
                            </Alert>
                        </Snackbar>
                    </Box>
                }
            </Grid>
            <Grid md={12} xs={12}>
                <Typography fontWeight={400}>Sign in with email & password!</Typography>
            </Grid>
            <form fullWidth onSubmit={e =>
                Signin(e)
            }>
                <Grid container gap={1}>
                    <Grid container md={12} xs={12} gap={2}

                        sx={{
                            '.MuiOutlinedInput-input': {
                                padding: 1.5
                            },
                            '.MuiInputLabel-root': {
                                width: '100px'
                            },
                            '.MuiInputBase-input-MuiOutlinedInput-input': {
                                padding: 1.5
                            },
                            '.MuiOutlinedInput-root': {
                                borderRadius: '6px'
                            },
                            '.MuiInputLabel-root': {
                                fontSize: '16px',
                                fontWeight:'500',
                                color:'#4C4C4C'
                            }
                        }}
                    >
                        <Grid container pt={2}>

                            <TextField
                                fullWidth
                                id="outlined-controlled"
                                label="Email"
                                type='email'
                                error={emailError}
                                onChange={e => (setEmail(e.target.value), setLoadingIcon(false))}
                            />
                            {/* {loginError?.message.includes('$email') &&
                                <FormHelperText id="component-helper-text">
                                    {loginError?.message}
                                </FormHelperText>
                            } */}
                        </Grid>
                        <Grid container >
                            <TextField
                                fullWidth
                                id="outlined-controlled"
                                label="Password"
                                error={passwordError}
                                sd={console.log(loginError)}
                                type={showPassword ? "text" : "password"}
                                onChange={e => (setPassword(e.target.value), setLoadingIcon(false))}
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
                            {/* {loginError?.message.includes('$password') &&
                                <FormHelperText id="component-helper-text">
                                    {loginError?.message}
                                </FormHelperText>
                            } */}
                        </Grid>
                    </Grid>

                    <Button disabled={loadingIcon} fullWidth type='submit' endIcon={
                        loginLoading ?
                            <InputAdornment position="end">
                                <CircularProgress sx={{ color: '#FFF' }} size={20} />
                            </InputAdornment> : null
                    } sx={{
                        '&:disabled': {
                            backgroundColor: '#abaaaa'
                        },
                        '&:hover': {
                            backgroundColor: '#17468F'
                        },
                        mt: '20px' /* margin top */, height: "50px", borderRadius: "25px", backgroundColor: "#143E7D", color: '#FFFF', textTransform: 'none', fontWeight: '200', fontSize: '16px'
                    }}>Sign in</Button>
                    <Grid container justifyContent='space-between' pt={1} alignItems={'center'}>
                        <Box display={'flex'} alignItems={'center'}>
                            <Checkbox sx={{ borderColor: "#B7B7B7", p: 0 }}></Checkbox>
                            <Typography pl={1} fontSize={14} fontWeight={400}> Remember me</Typography>
                        </Box>
                        <Link
                            className="passLink"
                            href='/account/resetpassword'
                            style={{
                                fontSize: 14,
                                textDecoration: 'none',
                                fontWeight: 400
                            }}
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