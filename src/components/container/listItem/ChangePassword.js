import { Button, Grid, InputAdornment, TextField, Typography } from "@mui/material";
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
    const [id, setId] = useState()
    const router = useRouter()
    const handleConfirm = () => {
        console.log(confirmPassword, newPassword);
        confirmPassword !== newPassword ?
            setError(false) :
            setError(true)
    }
    const handlePasswordIcon = (value) => {
        setId(value)
        setShowPassword(!showPassword)
    }
    const changePassword = (e) => {
        e.preventDefault()
        console.log(currentPassword, newPassword);
        confirmPassword === newPassword ?
            password({
                variables: {
                    currentPassword: currentPassword, newPassword: newPassword
                }
            })
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
                    type={showPassword && id==='item1' ? 'text' : 'password'}
                    onChange={(e) => (setNewPassword(e.target.value))}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                    showPassword && id === "item1" ?
                                        <VisibilityOutlinedIcon onClick={() => handlePasswordIcon('item1')} />
                                        :
                                        <VisibilityOffIcon onClick={() => handlePasswordIcon('item1')} />
                                }

                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    error={passwordError}
                    id="outlined-controlled"
                    label="new Password"
                    type={showPassword && id==='item2' ? 'text' : 'password'}
                    onChange={(e) => (setNewPassword(e.target.value), handleConfirm())}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                    showPassword && id === "item2" ?
                                        <VisibilityOutlinedIcon onClick={() => handlePasswordIcon('item2')} />
                                        :
                                        <VisibilityOffIcon onClick={() => handlePasswordIcon('item2')} />
                                }

                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    error={passwordError}
                    id="outlined-controlled"
                    label="confirm new password"
                    type={showPassword && id==='item3' ? 'text' : 'password'}
                    // color={passwordError ? 'success' : ''}
                    onChange={(e) => (setConfirmPassword(e.target.value), handleConfirm())}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                {
                                    showPassword && id === "item3" ?
                                        <VisibilityOutlinedIcon onClick={() => handlePasswordIcon('item3')} />
                                        :
                                        <VisibilityOffIcon onClick={() => handlePasswordIcon('item3')} />
                                }

                            </InputAdornment>
                        ),
                    }}
                />
                <Grid container gap={2}>
                    <Button sx={{ borderRadius: 22, backgroundColor: "#17468F" }} type="submit" variant="contained">
                        update
                    </Button>
                    <Button onClick={() => router.push("/my-account/profile-information")} sx={{ borderRadius: 22, borderColor: "#17468F", color: '#17468F' }} variant="outlined">
                        cancel
                    </Button>
                </Grid>


            </Grid>
        </form>
    );
}

export default ChangePassword;