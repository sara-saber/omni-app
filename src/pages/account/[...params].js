import SignIn from "@/components/container/account/SignIn";
import SignUp from "@/components/container/account/SignUp";
import { useRouter } from "next/router";
import { Grid, Button, Box } from '@mui/material';
import ForgetPassword from "@/components/container/account/ForgetPassword";
import { useState } from "react";

const Account = () => {
    const router = useRouter()
    const { params = [] } = router.query
    const [bgColor, setbgColor] = useState('#F5F5F5')
    const [textColor, setTextColor] = useState('#4C4C4C')
    const [btnId, setbtnId] = useState('btn1')
    const handleButton = (e) => {
        setbtnId(e.target.id)
    }
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

    }
    return (
        <Grid container justifyContent={"center"}>
            <Box
                sx={{
                    backgroundColor: { xs: 'white' },
                    width: { md: 530, xs: '100%' },
                    my: { md: 10, xs: 1 },
                    pb: 5,
                    borderRadius: { md: '10px', xs: '0' },
                    border: { md: "1px solid #C6C7C8" },
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
                                    id='btn1'
                                    fullWidth
                                    sx={{ 
                                        borderTopLeftRadius:10,
                                       height: 61, backgroundColor: btnId === 'btn1' ? '#FFFF':bgColor , fontSize: "16px",
                                         textTransform: "capitalize", color: btnId==="btn1"?"#17468F":textColor,
                                         '&:hover':{
                                            backgroundColor:btnId === 'btn1' ? '#FFFF':bgColor
                                         },
                                         fontWeight: "54px" }}
                                    onClick={(e) => (router.push("/account/login"),handleButton(e), setbgColor("#F5F5F5"),setTextColor("#4C4C4C")  )}
                                    textTransform='none'>
                                    Sign In
                                </Button>
                            </Grid>
                            <Grid xs={6}>
                                <Button
                                    fullWidth
                                    id='btn2'
                                    sx={{ 
                                        height: 61, backgroundColor: btnId === 'btn2' ? '#FFFF': bgColor,
                                         fontSize: "16px", textTransform: "capitalize",
                                         color: btnId==='btn2'?"#17468F":textColor, 
                                         '&:hover':{
                                            backgroundColor:btnId === 'btn2' ? '#FFFF':bgColor
                                         },
                                         borderTopRightRadius:10,
                                         fontWeight: "54px" }}
                                    variant="soft"
                                    onClick={(e) => (router.push("/account/signup"),handleButton(e), setbgColor("#F5F5F5"),setTextColor("#4C4C4C") )}
                                    textTransform='none'
                                >
                                    Create account
                                </Button>
                            </Grid></>

                    }
                    <Grid md={12} ml={{ md: 4, xs: 0 }} mt={{ md: 2, xs: 1 }} mr={{ md: 4, xs: 0 }} >

                        {contentToRender}
                    </Grid>
                </Grid>
            </Box>

        </Grid>

    );
}

export default Account;