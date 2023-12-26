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
                    width: { md: 530, xs: '100%' },
                    my: { md: 10, xs: 1 },
                    pb:5,
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
                                    onClick={() => router.push("/signin")}
                                    textTransform='none'>
                                    Sign In
                                </Button>
                            </Grid>
                            <Grid xs={6}>
                                <Button
                                    fullWidth
                                    sx={{ height: 61, fontSize: "16px", textTransform: "capitalize", color: "#4C4C4C", fontWeight: "54px" }}
                                    variant="soft"
                                    onClick={() => router.push("/signup")}
                                    textTransform='none'
                                >
                                    Create account
                                </Button>
                            </Grid></>

                    }
                    <Grid  md={12}  ml={{ md: 4, xs: 0 }}  mt={{ md: 2, xs: 1 }}  mr={{ md: 4, xs:0 }} >

                        {contentToRender}
                    </Grid>
                </Grid>
            </Box>

        </Grid>

    );
}

export default Account;