
import { Button, Box, TextField, List, ListItem, Divider, Grid, Link, Typography, InputAdornment } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import logoImage from "../../images/logo2.png"
import Image from "next/image";
const Footer = () => {
    return (
        <Grid>
            <Grid container mt={5} py={{md:3,xs:2}} px={{md:20 ,xs:3}} backgroundColor="#F8FAFD" gap={{md:5,xs:3}} alignItems={"center"} 
            justifyContent={{md:"space-between",xs:'center'}} md={12} xs={12}>
                <Typography maxWidth={{ md: 274, xs: '100%' }} variant="h4" fontWeight={700} color="var(--dark-blue)">
                    Join the Omniadis family
                </Typography>
                <Divider sx={{ display: { xs: 'none', md: 'flex' }, borderBottomWidth: '78px' }} orientation="vertical" color='#C4C4C4'></Divider>
                <Typography color='#27325E' maxWidth={{ md: '251px', xs: '100%' }} >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                </Typography>
                <TextField
                    sx={{
                        ".css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root ": {
                            pr: 0,
                            borderTopRightRadius: 22,
                            borderTopLeftRadius: 5,
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 22
                        },
                        width: 447,
                        backgroundColor: '#FFFFFF'
                    }}
                    label="your email address.." size='small'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button sx={{ bgcolor: '#17468F', borderRadius: 22, height: '43px' }} variant="contained">Subscribe</Button>
                            </InputAdornment>
                        ),
                    }}
                >
                </TextField>
            </Grid>
            <Grid
                backgroundColor={'#27325E'} container mt={2} pb={{md:3,xs:1}} pt={{ md:12, xs: 5 }} px={{ md: 20, xs: 2 }} gap={{ md: 3, xs: 2 }} >
                <Grid pl={1.5} md={12}>
                    <Image width={205} height={40} src={logoImage} />
                </Grid>
                <Grid xs={9} md={3}>
                    <ListItem sx={{ maxWidth: "274px", color:'#fff',fontSize: { xs: '16px', md: '18px' } }}>
                        Av. des Communes-Réunies 51 CH – 1212 Grand-Lancy / GE info@omniadis.ch +41 (0)22 884 11 33
                    </ListItem>
                </Grid>
                <Grid md={2} xs={5} sx={{ color:'#fff'}}>
                    <List>
                        <ListItem >
                            Alimentaire
                        </ListItem>
                        <ListItem>
                            Boissons
                        </ListItem>
                        <ListItem>
                            Non alimentaire
                        </ListItem>
                        <ListItem>
                            Sel
                        </ListItem>
                    </List>
                </Grid>
                <Grid md={2} xs={5} sx={{ color:'#fff'}}>
                    <List >
                        <ListItem>
                            About Us
                        </ListItem>
                        <ListItem>
                            Responsible company
                        </ListItem>
                        <ListItem>
                            Contact Us
                        </ListItem>
                    </List>
                </Grid>
                <Grid md={2} xs={5} sx={{ color:'#fff'}}>
                    <List>
                        <ListItem>
                            Training
                        </ListItem>
                        <ListItem>
                            Blog
                        </ListItem>
                        <ListItem>
                            Customer Service
                        </ListItem>
                    </List>
                </Grid>
                <Grid md={2} xs={5}  sx={{ color:'#fff'}}>
                    <List>
                    <ListItem fontWeight={700}>SOCIAL MEDIA</ListItem>
                        <ListItem justifyContent="space-between">
                            <Grid>
                            <FacebookRoundedIcon sx={{ color:'#fff'}} />
                            </Grid>
                            <Grid>
                            <FacebookRoundedIcon sx={{ color:'#fff'}} />
                            </Grid>
                        </ListItem>
                    </List>

                </Grid>
                <Grid mt={{ md: 8, xs: 0 }} md={12} xs={12}>
                    <Divider color="#fff" sx={{ my: 2 }} />
                </Grid>
                <Grid sx={{ color:'#fff'}} container gap={{md:5,xs:2}} justifyContent={"center"} md={12} xs={12}>
                    <Link href="#" color="inherit">Terms and Conditions</Link>
                    <Link sx={{ fontSize: '14px' }} href="#" color="inherit">
                        Sécurity and confidentialit
                    </Link>
                    <Link sx={{ fontSize: '14px' }} href="#" color="inherit">
                        Policy
                    </Link>
                    <Link sx={{ fontSize: '14px' }} href="#" color="inherit">
                        FAQ
                    </Link>
                    <Link sx={{ fontSize: '14px' }} href="#" color="inherit">
                        Career
                    </Link>
                </Grid>
                <Grid m={{ md: 0, xs: 3 }} textAlign={"center"} md={12} xs={12} >
                    <Typography color={'#fff'} sx={{ fontSize: "14px" }} textAlign="center">
                        Copyright 2023 © Omniadis. Inc. All rights reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Footer;