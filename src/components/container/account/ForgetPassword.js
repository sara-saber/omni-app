import { RESET_EMAIL } from "@/graphql/Mutations";
import { useMutation } from "@apollo/client";
import { Grid, Typography, TextField, Button } from "@mui/material";
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
            <Grid container gap={2}>
                <Typography>Forgot your password</Typography>
                <Typography >Enter your email address below and we will send you instructions to reset your password.</Typography>
                <TextField fullWidth
                    required
                    onChange={e => setEmail(e.target.value)}
                    label="Email"
                    id="outlined-basic"
                >
                </TextField>
                <Button type="submt" sx={{ borderRadius: 25, backgroundColor: '#17468F' }} fullWidth variant="contained"> submit</Button>
                <Typography sx={{ textDecoration: "underline" }} onClick={() => router.push("/login")}  >Sign in instead</Typography>
            </Grid>
        </form>

    );
}

export default ForgetPassword;