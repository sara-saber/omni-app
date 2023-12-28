import { RESET_EMAIL } from "@/graphql/Mutations";
import { useMutation } from "@apollo/client";
import {Link, Grid, Typography, TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const ForgetPassword = () => {
    const router = useRouter()
    const [emailInput, { loading, error }] = useMutation(RESET_EMAIL)
    const [email, setEmail] = useState(String)
    const submit = async (e) => {
        e.preventDefault();
        const data = await emailInput({ variables: { email: email } })
        router.push("/my-account/change-password")
    }

    return (
        <form onSubmit={e => submit(e)}>
            <Grid container gap={3} >
                <Typography fontWeight={600}>Forgot your password</Typography>
                <Typography >Enter your email address below and we will send you instructions to reset your password.</Typography>
                <TextField fullWidth
                    required
                    onChange={e => setEmail(e.target.value)}
                    label="Email"
                    id="outlined-basic"
                >
                </TextField>
                <Grid md={12}> <Button type="submt" sx={{ height:'50px',textTransform: 'none', borderRadius: 25, backgroundColor: '#17468F' }} fullWidth variant="contained"> Submit</Button>
                </Grid>
                <Grid md={12} container justifyContent={"center"}>
                    <Link fontWeight={400} fontSize={'16px'}  color={'#2B3445'} href='/account/login' >Sign in instead</Link>
                </Grid>
            </Grid>
        </form>

    );
}

export default ForgetPassword;