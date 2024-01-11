import {  Alert, Button, Grid, InputAdornment, TextField, Typography, useMediaQuery } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CHANGE_PASSWORD } from "@/graphql/Mutations";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { useRouter } from "next/router";
import PageName from "./shared/PageName/PageName";
import SnackBar from "./shared/Snackbar";


const ChangePassword = () => {
    const [password, { data, error: passError }] = useMutation(CHANGE_PASSWORD, { errorPolicy: "all" })
    const [currentPassword, setCurrentPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [passwordError, setError] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [openSnackbar, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('error')
    const screenWidth = useMediaQuery('(max-width:768px)')
    const [txtId, settxtId] = useState()
    const router = useRouter()
    const handleConfirm = () => {
        confirmPassword !== newPassword ?
            (setError(false)) :
            setError(true)
    }
    const handlePasswordIcon = (e, value) => {
        settxtId(e.target.id)
        setShowPassword(value ? showPassword : false)
    }

    const changePassword = (e) => {
        e.preventDefault()
        console.log(currentPassword + " " + newPassword);
        !confirmPassword && !newPassword ?
            (setOpen(true), setMessage('You must fill the required fileds'), setSeverity('error'))
            :
            confirmPassword === newPassword ?
                (
                    password({
                        variables: {
                            currentPassword: currentPassword, newPassword: newPassword
                        }
                    })

                )
                :
                (setError(true), setMessage('Passwords do NOT match'), setSeverity('warning'))
        if (passError) {
            setOpen(true)
            setMessage('Your Current Password is Wrong')
            setSeverity('error')
        }
        if (data) {
            console.log(data);
        }
    }
    return (
        <form onSubmit={(e) => changePassword(e)}>
            <Grid sx={{
                '.MuiOutlinedInput-root': {
                    borderRadius: '6px'
                },
            }} container gap={2} md={6}>
                <PageName url='/my-account/profile-information' name='Change password' position={'center'} >
                </PageName>
                <TextField
                    fullWidth
                    id="item1"
                    label="Current password"
                    value={currentPassword}
                    type={(showPassword && txtId === "item1") ? 'text' : 'password'}
                    onChange={(e) => (setCurrentPassword(e.target.value))}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                    showPassword === false && txtId === "item1" ?
                                        <VisibilityOutlinedIcon onClick={() => (settxtId('item1'), setShowPassword(true))} />
                                        :
                                        <VisibilityOffIcon onClick={() => (settxtId('item1'), setShowPassword(false))} />
                                }

                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    error={passwordError}
                    label="New password"
                    type={(showPassword && txtId === "item2") ? 'text' : 'password'}
                    onChange={(e) => (setNewPassword(e.target.value), handleConfirm())}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                    showPassword === false && txtId === "item2" ?
                                        <VisibilityOutlinedIcon onClick={() => (settxtId('item2'), setShowPassword(true))} />
                                        :
                                        <VisibilityOffIcon onClick={(e) => (settxtId('item2'), setShowPassword(!showPassword))} />
                                }

                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    error={passwordError}
                    label="Confirm new password"
                    type={(showPassword && txtId === "item3") ? 'text' : 'password'}
                    // color={passwordError ? 'success' : ''}
                    onChange={(e) => (setConfirmPassword(e.target.value), handleConfirm())}

                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                    showPassword === false && txtId === "item3" ?
                                        <VisibilityOutlinedIcon onClick={() => (settxtId('item3'), setShowPassword(true))} />
                                        :
                                        <VisibilityOffIcon onClick={() => (settxtId('item3'), setShowPassword(!showPassword))} />
                                }

                            </InputAdornment>
                        ),
                    }}
                />
                <Grid mt={'18px'} container gap={2}>
                    <Grid xs={12} md={3} container justifyContent={'space-between'}>
                        <Button sx={{
                            fontWeight: 300,
                            textTransform: 'none',
                            width: { md: 113, xs: '100%' }, height: 43, borderRadius: 22, backgroundColor: "#17468F"
                        }} type="submit" variant="contained">
                            {screenWidth ? 'Save' : 'Update'}
                        </Button>

                    </Grid>
                    <Grid>
                        <Button type="button" onClick={() => router.push("/my-account/profile-information")} sx={{
                            '&:hover': {
                                backgroundColor: '#143E7D',
                                color: '#FFFFFF'
                            },
                            display: { md: 'block', xs: 'none' },
                            width: 113, height: 43,
                            textTransform: 'none',
                            borderRadius: 22, borderColor: "#2B3445", color: '#2B3445'
                        }} variant="outlined">
                            Cancel
                        </Button></Grid>
                </Grid>


            </Grid>

            {/* <Snackbar onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={openSnackbar} autoHideDuration={1000} >
                <Alert severity={severity} sx={{ width: '100%' }} sd={console.log(message)}>
                    {message}
                </Alert>
            </Snackbar> */}
            <SnackBar severity={severity} message={message} setOpen={setOpen} openSnackbar={openSnackbar}></SnackBar>

        </form>

    );
}

export default ChangePassword;