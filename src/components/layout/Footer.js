
import { Button, Box, TextField, List, ListItem, Divider, Grid, Typography, InputAdornment } from "@mui/material";
import Link from 'next/link'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import logoImage from "../../images/logo2.png"
import Image from "next/image";
const Footer = () => {
    return (
        <Grid>
            <Grid container mt={5} py={{ md: 2, lg: 3, xs: 2 }} px={{ md: 3, xs: 3, lg: 22 }} gap={{ lg: 3, md: 3, xs: 4 }} alignItems={"center"}
                justifyContent={{ lg: 'space-between', md: 'space-between', xs: 'center' }} backgroundColor='#F8FAFD' >
                <Grid xl={3} lg={3} xs={12} md={12}>
                    <Typography minWidth={{ md: '274px' }} height={{ md: 30, lg: 87, xs: 20 }} textAlign={{ xs: 'center', md: 'center', lg: 'start' }} fontSize={{ md: 30, xs: 23 }}
                        fontWeight={700} color={{ md: "var(--dark-blue)", xs: '#2B3445' }}>
                        Join the Omniadis family
                    </Typography>
                </Grid>
                <Grid container xl={3.2} lg={3} md={12} columnGap={1} alignItems={'center'} justifyContent={{ xs: 'center', md: 'center', lg: 'flex-start' }} >
                    <Divider sx={{ display: { xs: 'none', lg: 'block', md: 'none', height: 87 } }} orientation="vertical" color='#C4C4C4'></Divider>
                    <Typography pl={2} textAlign={{ xs: 'center', md: 'start' }} fontSize={{ md: 15, xs: 14 }} color='#27325E' width={{ md: '251px', xs: '100%' }} >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    </Typography>
                </Grid>
                <Grid xl={4.5} lg={4.5} md={12} textAlign={{ md: 'center' }}>
                    <TextField
                        sx={{
                            ".MuiOutlinedInput-root": {
                                pr: 0,
                                borderTopRightRadius: 22,
                                borderTopLeftRadius: 5,
                                borderBottomLeftRadius: 5,
                                borderBottomRightRadius: 22
                            },
                            minWidth: { lg: 447, xs: '100%', md: '447px' },
                            backgroundColor: { md: '#FFFFFF', xs: '#F8FAFD' }
                        }}
                        label="your email address.." size='small'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button sx={{ textTransform: 'none', bgcolor: '#17468F', borderRadius: 22, height: '43px' }} variant="contained">Subscribe</Button>
                                </InputAdornment>
                            ),
                        }}
                    >
                    </TextField>
                </Grid>
            </Grid>
            <Grid
                backgroundColor={'#27325E'} container mt={2} pb={{ md: 3, xs: 1 }} pt={{ md: 12, xs: 5 }} px={{ md: 22, xs: 2 }} rowGap={{ md: 2, xs: 3 }} columnGap={{ md: 11 }} >
                <Grid lg={12} md={12}>
                    <Image width={205} height={40} src={logoImage} />
                </Grid>
                <Grid xs={10} md={10} lg={3}>
                    <Typography fontWeight={300} sx={{ maxWidth: { md: 274, xs: '100%' }, color: '#fff', fontSize: { xs: '16px', md: '18px' } }}>
                        Av. des Communes-Réunies 51 CH – 1212 Grand-Lancy / GE info@omniadis.ch +41 (0)22 884 11 33
                    </Typography>
                </Grid>
                <Grid container rowGap={2} md={12} lg={8} sx={{
                    '.MuiListItem-root': {
                        pl: 0
                    }
                }} >
                    <Grid md={3} xs={6} sx={{ color: '#fff' }}>
                        <Box sx={{ padding: 0 }}>
                            <ListItem >
                                Alimentaire
                            </ListItem>
                            <ListItem>
                                Boissons
                            </ListItem>
                            <ListItem>
                                Boissons
                            </ListItem>
                            <ListItem>
                                Emballages
                            </ListItem>
                            <ListItem>
                                Non alimentaire
                            </ListItem>
                        </Box>
                    </Grid>
                    <Grid md={3} xs={6} sx={{ color: '#fff' }}>
                        <Box sx={{ padding: 0 }}>
                            <ListItem>
                                About Us
                            </ListItem>
                            <ListItem>
                                Responsible
                            </ListItem>
                            <ListItem>
                                Contact Us
                            </ListItem>
                        </Box>
                    </Grid>
                    <Grid md={3} xs={6} sx={{ color: '#fff' }}>
                        <Box sx={{ padding: 0 }}>
                            <ListItem>
                                Training
                            </ListItem>
                            <ListItem>
                                Blog
                            </ListItem>
                            <ListItem>
                                Customer Service
                            </ListItem>
                        </Box>
                    </Grid>
                    <Grid md={3} xs={6} sx={{ color: '#fff' }}>
                        <List sx={{ padding: 0 }}>
                            <ListItem sx={{ fontWeight: 600 }}>SOCIAL MEDIA</ListItem>
                            <ListItem justifyContent="space-between">
                                <Grid>
                                    <FacebookRoundedIcon sx={{ color: '#fff' }} />
                                </Grid>
                                <Grid>
                                    <FacebookRoundedIcon sx={{ color: '#fff' }} />
                                </Grid>
                            </ListItem>
                        </List>

                    </Grid>
                </Grid>
                <Grid mt={{ md: 8, xs: 0 }} md={12} xs={12} lg={12}>
                    <Divider color="#fff" sx={{ my: 2 }} />
                </Grid>
                <Grid sx={{ color: '#fff' }} container rowGap={{ md: 5, xs: 2 }} columnGap={{ md: 5, xs: 0.7 }} justifyContent={"center"} md={12} xs={12}>
                    <Link className="footerLink" href="#">Terms and Conditions</Link>
                    <Link className="footerLink" href="#" >
                        Sécurity and confidentialit
                    </Link>
                    <Link className="footerLink" href="#">
                        Policy
                    </Link>
                    <Link className="footerLink" href="#">
                        FAQ
                    </Link>
                    <Link className="footerLink" href="#">
                        Career
                    </Link>
                </Grid>
                <Grid mb={{ md: 0, xs: 3.1 }} textAlign={"center"} md={12} xs={12} >
                    <Typography fullwidth color={'#fff'} sx={{ fontSize: "12px" }} textAlign="center">
                        Copyright 2023 © Omniadis. Inc. All rights reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Footer;