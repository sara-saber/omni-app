
import { Sheet } from "@mui/joy";
import * as React from 'react';
import { Button, Box, TextField, List, ListItem, Divider, Grid, Link, Typography, InputAdornment } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import logoImage from "../../images/logo2.png"
import Image from "next/image";
const Footer = () => {
    const [color, setColor] = React.useState('primary');
    return (
        <Sheet
            variant="solid"
            sx={{
                ...(color !== 'neutral' && {
                    bgcolor: color === 'primary' ? '#27325E' : undefined,
                })
            }}>
            <Grid backgroundColor="#F8FAFD"
                p={5}
                mt={3}
                alignItems={"center"} justifyContent={"center"} container gap={4}>
                <Typography maxWidth={250} variant="h4" color="#27325E">
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
                            borderTopLeftRadius:5,
                            borderBottomLeftRadius:5,
                            borderBottomRightRadius: 22
                        },
                        width:447,
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
            <Grid container mt={10} py={{md:10}} px={{ md: 20, xs: 5 }} gap={2} >
                <Grid pl={1.5} md={12}>
                    <Image width={205} height={40} src={logoImage} />
                </Grid>
                <Grid xs={9} md={3}>
                    <ListItem sx={{ maxWidth: "274px", fontSize: { xs: '16px', md: '18px' } }}>
                        Av. des Communes-Réunies 51 CH – 1212 Grand-Lancy / GE info@omniadis.ch +41 (0)22 884 11 33
                    </ListItem>
                </Grid>
                <Grid md={2} xs={5}>
                    <List >
                        <ListItem>
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
                <Grid md={2} xs={5}>
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
                <Grid md={2} xs={5}>
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
                <Grid md={2} xs={12}>
                    <List>
                        <Typography>SOCIAL MEDIA</Typography>
                        <ListItem justifyContent="space-between">
                            <FacebookRoundedIcon />
                            <FacebookRoundedIcon />
                        </ListItem>
                    </List>

                </Grid>
                <Grid md={12} xs={10}>
                    <Divider color="#fff" sx={{ my: 2 }} />
                </Grid>
                <Grid container gap={5} justifyContent={"center"} md={12} xs={12}>
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
                <Grid m={0} textAlign={"center"} md={12} xs={12} >
                    <Typography sx={{ fontSize: "14px" }} textAlign="center">
                        Copyright 2023 © Omniadis. Inc. All rights reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Sheet >
    );
}

export default Footer;