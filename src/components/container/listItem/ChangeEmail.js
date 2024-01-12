import { Button, Grid, TextField, Typography, InputAdornment, Snackbar, Alert, useMediaQuery } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CHANGE_EMAILL } from "@/graphql/Mutations";
import { useRouter } from "next/router";
import PageName from "./shared/PageName/PageName";
import SnackBar from "./shared/Snackbar";

const ChangeEmail = (props) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [updateEmail, { data, error: emailError, loading }] = useMutation(CHANGE_EMAILL, { errorPolicy: "all" })
    const [openSnackbar, setOpen] = useState(false)
    const [severity, setSeverity] = useState('error')
    const [message, setMessage] = useState('')
    const screenSize = useMediaQuery('(max-width:768px)')
    const router = useRouter()
    const changeEmail = (e) => {
        e.preventDefault()
        !email && !password ?
            (setOpen(true),
                setMessage('must fill the email and password fields'),
                setSeverity('warning'))
            :
            updateEmail({
                variables: { Email: email, Password: password }
            })

        if (emailError) {
            setOpen(true)
            setMessage('your password is Wrong check again!!')
            setSeverity('error')
        }
        if (data) {
            setOpen(true)
            setMessage('Your Email was updated')
            setSeverity('success')
        }
        console.log(data)
    }
    return (

        <form>
            <Grid container gap={3} md={12}>
                <PageName url='/my-account/profile-information' name='Change email' position={'center'} >
                </PageName>
                <TextField
                    fullWidth
                    label="Email"
                    type='email'
                    onChange={(e) => (setEmail(e.target.value))}
                />
                <TextField
                    fullWidth
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
                    <Button onClick={(e) => changeEmail(e)} sx={{
                        '&:hover': {
                            backgroundColor: '#143E7D',
                            color: '#FFFFFF',
                        },
                        textTransform: 'none',
                        width: screenSize ? '100%' : '113px',
                        borderRadius: 22, backgroundColor: "#17468F"
                    }} variant="contained">
                        {{ screenSize } ? 'Save' : 'Update'}
                    </Button>
                    {/* router.push("/my-account/profile-information") */}
                    <Button type="button" onClick={() => props?.setDrawer(false)} sx={{
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


            <SnackBar message={message} setOpen={setOpen} openSnackbar={openSnackbar} severity={severity}></SnackBar>

        </form >

    );
}

export default ChangeEmail;