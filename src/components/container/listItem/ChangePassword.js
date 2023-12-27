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

    const [txtId, settxtId] = useState()
    const router = useRouter()
    const handleConfirm = () => {
        confirmPassword !== newPassword ?
            setError(false) :
            setError(true)
    }
    const handlePasswordIcon = (e,value) => {
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
                    type={(showPassword && (txtId === 'item1')) ? 'text' : 'password'}
                    onChange={(e) => (setCurrentPassword(e.target.value))}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                    (showPassword && (txtId === "item1")) ?
                                        <VisibilityOutlinedIcon id="item1" onClick={(e) => (handlePasswordIcon(e,false))} />
                                        :
                                        <VisibilityOffIcon id="item1" onClick={(e) => (handlePasswordIcon(e,true))} />
                                }

                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    error={passwordError}
                    label="new Password"
                    type={(showPassword && (txtId === 'item2')) ? 'text' : 'password'}
                    onChange={(e) => (setNewPassword(e.target.value), handleConfirm())}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                   ( showPassword && (txtId === "item2")) ?
                                        <VisibilityOutlinedIcon id='item2' onClick={(e) => (handlePasswordIcon(e,false))}/>
                                        :
                                        <VisibilityOffIcon id='item2' onClick={(e) => (handlePasswordIcon(e,true))} />
                                }

                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    error={passwordError}
                    label="confirm new password"
                    type={(showPassword && (txtId === 'item3') )? 'text' : 'password'}
                    // color={passwordError ? 'success' : ''}
                    onChange={(e) => (setConfirmPassword(e.target.value), handleConfirm())}

                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                   ( showPassword && (txtId === "item3" ))?
                                        <VisibilityOutlinedIcon id='item3' onClick={(e) => (handlePasswordIcon(e,false))}/>
                                        :
                                        <VisibilityOffIcon id='item3' onClick={(e) => (handlePasswordIcon(e,true))}/>
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
                        borderRadius: 22, borderColor: "#17468F", color: '#17468F'
                    }} variant="outlined">
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