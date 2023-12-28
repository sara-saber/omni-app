
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Avatar, Divider, Grid, Typography, Button, Link, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import SideBarDrawer from './Drawer/SidebarDrawer';
import { useQuery } from '@apollo/client';
import { Get_Customer_Addresses } from '@/graphql/Query';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Addresses = () => {
    const [expanded, setExpanded] = useState(false);
    const { data } = useQuery(Get_Customer_Addresses)
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [drawer, setDrawer] = useState(false)
    return (
        <Grid container gap={2} >
            {/* <SideBarDrawer openDrawer={openDrawer} ></SideBarDrawer> */}
            {console.log(data?.customer?.addresses)}
            {/* <Grid order={{ md: 1, xs: 1 }} md={5.95} xs={12}>
                <Typography>Addresses</Typography>
            </Grid> */}
            <Grid md={6} xs={12} container gap={2} alignItemst={"center"}>
                <Grid sx={{ display: { md: 'none', xs: 'flex' } }} xs={4}>
                    <Avatar>
                        <KeyboardBackspaceIcon onClick={() => router.push('my-account')} />
                    </Avatar>
                </Grid>
                <Grid xs={6}>
                    <Typography fontSize={20} fontWeight={700} justifyContent={{ xs: 'center', md: 'flex-start' }} pb={2}  >
                        Addresses
                    </Typography>
                </Grid>
                <Grid display={{ md: 'none', xs: 'block' }} xs={12}>
                    <Divider />
                </Grid>
            </Grid>
            <Grid order={{ md: 1, xs: 2 }} md={5.59} xs={12} display={{ md: 'flex', xs: 'block' }} justifyContent={{ md: 'flex-end', xs: 'center' }}>
                <Button
                    sx={{
                        borderRadius: '22px',
                        width: { md: '183px', xs: '100%' },
                        maxHeight: '68px',
                        backgroundColor: '#fff',
                        color: 'black',
                        border: '1px solid #2B3445',
                        textTransform: 'none'
                    }}

                >
                    add new addresses
                </Button>
            </Grid>
            <Grid order={{ md: 2, xs: 1 }} container gap={1} md={12} xs={12}>
                <Grid md={6} xs={12}>
                    <Box backgroundColor='#F8FAFD' py={1} px={3} border='2px solid #E0E0E0' borderRadius={2}>
                        <Typography >
                            {data?.customer?.addresses[0].firstname}  {data?.customer?.addresses[0].lastname}
                        </Typography>
                        <Typography pt={1} level="title-md" >
                            {data?.customer?.addresses[0].street[0]}
                        </Typography>
                        <Grid pt={1} container justifyContent={'space-between'}>
                            <Typography level="title-lg">Data Detailsefault shipping</Typography>
                            <EditOutlinedIcon></EditOutlinedIcon>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            <Grid order={{ md: 3, xs: 3 }} md={12} xs={12} >
                {data?.customer.addresses.map((item) => (
                    <Box py={1} px={6} border='2px solid #E0E0E0' borderRadius={2} >
                        <Grid container alignItems='center' justifyContent={"space-between"}>
                            <Grid md={3}>
                                <Typography level="title-md" fontSize={16}>{item?.firstname}</Typography>
                            </Grid>
                            <Grid md={3}>
                                <Typography level="title-lg" fontSize={16}>{item?.street[1]} {item.street[0]}</Typography>
                            </Grid>
                            <Grid md={3}>
                                <Typography level="title-lg" fontSize={16}>{item.postcode}</Typography>
                            </Grid>
                            <Grid textAlign={'right'} md={3}>
                                <Link pl={2}>
                                    <ModeEditOutlineOutlinedIcon />
                                </Link>
                                <Link color='#EB1C23' pl={2}>
                                    <DeleteOutlineOutlinedIcon />
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                ))}
            </Grid>
            <SideBarDrawer customer={data?.customer} SideBarDrawer drawer={drawer} setDrawer={setDrawer}  ></SideBarDrawer>
        </Grid >

    );
}

export default Addresses;