import SignIn from "@/components/container/account/SignIn";
import SignUp from "@/components/container/account/SignUp";
import { useRouter } from "next/router";
import { Grid, Button, Box } from '@mui/material';
import ForgetPassword from "@/components/container/account/ForgetPassword";

const Account = () => {
    const router = useRouter()
    const { params = [] } = router.query
    let contentToRender;
    switch (params[0]) {
        case "login":
            contentToRender = <SignIn />
            break

        case "signup":
            contentToRender = <SignUp />
            break

        case "resetpassword":
            contentToRender = <ForgetPassword />
            break
        default:
            contentToRender = <SignIn />
            break

    }
    return (
        <Grid container justifyContent={"center"}>
            <Box
                sx={{
                    backgroundColor: { xs: 'white' },
                    width: { md: '530px', xs: '100%' },
                    my: { md: 10, xs: 1 },
                    mx: { md: '25%', xs: 0 },
                    borderRadius: { md: 'sm', xs: '0' },
                    border: { md: "2px solid #1111" },
                    height: 'auto'
                }}
            >
                <Grid container>
                    {params[0] === "resetpassword" ?
                        <></>
                        :
                        <>
                            <Grid xs={6}>
                                <Button
                                    fullWidth
                                    sx={{ height: 61, fontSize: "16px", textTransform: "capitalize", color: "#17468F", fontWeight: "54px" }}
                                    onClick={() => router.push("/signin")}>
                                    Sign In
                                </Button>
                            </Grid>
                            <Grid xs={6}>
                                <Button
                                    fullWidth
                                    sx={{ height: 61, fontSize: "16px", textTransform: "capitalize", color: "#4C4C4C", fontWeight: "54px" }}
                                    variant="soft"
                                    onClick={() => router.push("/signup")}
                                >
                                    Create account
                                </Button>
                            </Grid></>

                    }
                    <Grid container md={12} m={{ md: 5, xs: 0 }} justifyContent={"center"}>

                        {contentToRender}
                    </Grid>
                </Grid>
            </Box>

        </Grid>

    );
}

export default Account;