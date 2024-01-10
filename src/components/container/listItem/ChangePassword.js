import { Snackbar, Alert, Button, Grid, InputAdornment, TextField, Typography, useMediaQuery } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CHANGE_PASSWORD } from "@/graphql/Mutations";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { useRouter } from "next/router";
import PageName from "./PageName/PageName";
const ChangePassword = () => {
    const [password, { data, error: passError }] = useMutation(CHANGE_PASSWORD)
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
        setShowPassword(value)
    }
    const handleClose = () => {
        setTimeout(() => {
            setOpen(false)
        }, 100)

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
                        },
                        onCompleted: (setOpen(true), setMessage('your Information was updated!'), setSeverity('success'))
                    })

                )
                :
                (setError(true), setMessage('Passwords do NOT match'), setSeverity('warning'))
        if (passError) {
            setError(true), setMessage('You Current Password is Wrong'), setSeverity('error')
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
                    label="Current password"
                    value={currentPassword}
                    type={(showPassword && (txtId === 'item1')) ? 'text' : 'password'}
                    onChange={(e) => (setCurrentPassword(e.target.value))}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                    (showPassword && (txtId === "item1")) ?
                                        <VisibilityOutlinedIcon id="item1" onClick={(e) => (handlePasswordIcon(e, false))} />
                                        :
                                        <VisibilityOffIcon id="item1" onClick={(e) => (handlePasswordIcon(e, true))} />
                                }

                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    error={passwordError}
                    label="New password"
                    type={(showPassword && (txtId === 'item2')) ? 'text' : 'password'}
                    onChange={(e) => (setNewPassword(e.target.value), handleConfirm())}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                    (showPassword && (txtId === "item2")) ?
                                        <VisibilityOutlinedIcon id='item2' onClick={(e) => (handlePasswordIcon(e, false))} />
                                        :
                                        <VisibilityOffIcon id='item2' onClick={(e) => (handlePasswordIcon(e, true))} />
                                }

                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    error={passwordError}
                    label="Confirm new password"
                    type={(showPassword && (txtId === 'item3')) ? 'text' : 'password'}
                    // color={passwordError ? 'success' : ''}
                    onChange={(e) => (setConfirmPassword(e.target.value), handleConfirm())}

                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                    (showPassword && (txtId === "item3")) ?
                                        <VisibilityOutlinedIcon id='item3' onClick={(e) => (handlePasswordIcon(e, false))} />
                                        :
                                        <VisibilityOffIcon id='item3' onClick={(e) => (handlePasswordIcon(e, true))} />
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


            <Snackbar onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={openSnackbar} autoHideDuration={1000} >
                <Alert severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>

        </form>

    );
}

export default ChangePassword;