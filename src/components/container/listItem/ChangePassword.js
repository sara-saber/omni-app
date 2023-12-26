import { Snackbar, Alert, Button, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CHANGE_PASSWORD } from "@/graphql/Mutations";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { useRouter } from "next/router";
const ChangePassword = () => {
    const [password, { data, error }] = useMutation(CHANGE_PASSWORD)
    const [currentPassword, setCurrentPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [passwordError, setError] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [openSnackbar, setOpen] = useState(false)

    const [id, setId] = useState()
    const router = useRouter()
    const handleConfirm = () => {
        // console.log(confirmPassword, newPassword);
        confirmPassword !== newPassword ?
            setError(false) :
            setError(true)
    }
    const handlePasswordIcon = (id, value) => {
        if (value === showPassword) {
            // console.log(showPassword)
        }
        else {
            setShowPassword(!showPassword)
            setId(id)
            // console.log(value);
            // console.log(showPassword)
        }
    }
    const handleClose = () => {
        setTimeout(() => {
            setOpen(false)
        }, 100)

    }
    const changePassword = (e) => {
        e.preventDefault()
        console.log(currentPassword + " " + newPassword);
        confirmPassword === newPassword ?
            password({
                variables: {
                    currentPassword: currentPassword, newPassword: newPassword
                },
                onCompleted: (setOpen(true))
            }).then(router.push("profile-information"))
            :
            setError(true)
    }
    return (
        <form onSubmit={(e) => changePassword(e)}>
            <Grid container gap={2} md={6}>
                <Typography>
                    Change Password
                </Typography>
                <TextField
                    fullWidth
                    label="current Password"
                    value={currentPassword}
                    type={showPassword && id === 'item1' ? 'text' : 'password'}
                    onChange={(e) => (setCurrentPassword(e.target.value))}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                    showPassword && id === "item1" ?
                                        <VisibilityOutlinedIcon onClick={() => handlePasswordIcon('item1', false)} />
                                        :
                                        <VisibilityOffIcon onClick={() => handlePasswordIcon('item1', true)} />
                                }

                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    error={passwordError}
                    label="new Password"
                    type={showPassword && id === 'item2' ? 'text' : 'password'}
                    onChange={(e) => (setNewPassword(e.target.value), handleConfirm())}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                    showPassword && id === "item2" ?
                                        <VisibilityOutlinedIcon onClick={() => handlePasswordIcon('item2', false)} />
                                        :
                                        <VisibilityOffIcon onClick={() => handlePasswordIcon('item2', true)} />
                                }

                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    error={passwordError}
                    label="confirm new password"
                    type={showPassword && id === 'item3' ? 'text' : 'password'}
                    // color={passwordError ? 'success' : ''}
                    onChange={(e) => (setConfirmPassword(e.target.value), handleConfirm())}
                    sd={(console.log(id), console.log(showPassword))}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                    showPassword && id === "item3" ?
                                        <VisibilityOutlinedIcon onClick={() => handlePasswordIcon('item3', false)} />
                                        :
                                        <VisibilityOffIcon onClick={() => handlePasswordIcon('item3', true)} />
                                }

                            </InputAdornment>
                        ),
                    }}
                />
                <Grid container gap={2}>
                    <Button sx={{ borderRadius: 22, backgroundColor: "#17468F" }} type="submit" variant="contained">
                        update
                    </Button>
                    <Button type="button" onClick={() => router.push("/my-account/profile-information")} sx={{ 
                         '&:hover': {
                            backgroundColor: '#143E7D',
                            color: '#FFFFFF'
                        },
                        borderRadius: 22, borderColor: "#17468F", color: '#17468F' }} variant="outlined">
                        cancel
                    </Button>
                </Grid>


            </Grid>
            <Snackbar onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={openSnackbar} autoHideDuration={1000} >
                <Alert severity="success" sx={{ width: '100%' }}>
                    your Information was updated!
                </Alert>
            </Snackbar>
        </form>

    );
}

export default ChangePassword;