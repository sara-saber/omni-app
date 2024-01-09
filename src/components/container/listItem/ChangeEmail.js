import { Button, Grid, TextField, Typography, InputAdornment, Snackbar, Alert, useMediaQuery } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CHANGE_EMAILL } from "@/graphql/Mutations";
import { useRouter } from "next/router";
import PageName from "./PageName/PageName";

const ChangeEmail = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [updateEmail, { data }] = useMutation(CHANGE_EMAILL)
    const [openSnackbar, setOpen] = useState(false)
    const screenSize = useMediaQuery('(max-width:768px)')
    const router = useRouter()
    const changeEmail = (e) => {
        e.preventDefault()
        updateEmail({
            variables: { Email: email, Password: password }
        }).then(
            setTimeout(() => {
                setOpen(true)
            }, 100),
            router.push("profile-information"))
        // console.log(email + password);
    }
    return (

        <form onSubmit={(e) => changeEmail(e)}>
            <Grid container gap={3} md={5}>
                <PageName url='/my-account/profile-information' name='Change email' position={'center'} >
                </PageName>
                <TextField
                    fullWidth
                    label="Email"
                    value={email}
                    type='email'
                    onChange={(e) => (setEmail(e.target.value))}
                />
                <TextField
                    fullWidth
                    value={password}
                    label="password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                    showPassword ?
                                        <VisibilityOutlinedIcon onClick={() => setShowPassword(!showPassword)} />
                                        :
                                        <VisibilityOffIcon onClick={() => setShowPassword(!showPassword)} />
                                }

                            </InputAdornment>
                        ),
                    }}
                />
                <Grid justifyContent={'center'} container mt={1} gap={2}>
                    <Button sx={{
                        '&:hover': {
                            backgroundColor: '#143E7D',
                            color: '#FFFFFF',
                        },
                        textTransform: 'none',
                        width: screenSize ? '100%' : '113px',
                        borderRadius: 22, backgroundColor: "#17468F"
                    }} type="submit" variant="contained">
                        {{ screenSize } ? 'Save' : 'Update'}
                    </Button>
                    <Button  type="button" onClick={() => router.push("/my-account/profile-information")} sx={{
                        '&:hover': {
                            backgroundColor: '#143E7D',
                            color: '#FFFFFF'
                        },
                        textTransform: 'none',
                        width: screenSize ? '50%' : '111px'
                        , borderRadius: 22, borderColor: "#17468F", color: '#17468F'
                    }} variant="outlined">
                        cancel
                    </Button>
                </Grid>


            </Grid>
            <Snackbar onClose={() => {
                setTimeout(() => {
                    setOpen(false)
                }, 100)
            }} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={openSnackbar} autoHideDuration={1000} >
                <Alert severity="success" sx={{ width: '100%' }}>
                    your Information was updated!
                </Alert>
            </Snackbar>
        </form >

    );
}

export default ChangeEmail;