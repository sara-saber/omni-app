
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Avatar, Divider, Grid, Typography, Button, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import SideBarDrawer from './Drawer/SidebarDrawer';
import { useQuery } from '@apollo/client';
import { Get_Customer_Addresses } from '@/graphql/Query';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Link from 'next/link'
import { useRouter } from 'next/router';
import PageName from './PageName/PageName';

const Addresses = () => {
    const [expanded, setExpanded] = useState(false);
    const { data } = useQuery(Get_Customer_Addresses)
    const router = useRouter()
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [drawer, setDrawer] = useState(false)
    return (
        <Grid container gap={2.5} >
            {console.log(data?.customer?.addresses)}
            <Grid md={5.6} container gap={2}>
                <PageName name={'Addresses'} position={'center'} url={'/my-account/dashboard'}>
                </PageName>
            </Grid>
            <Grid order={{ md: 1, xs: 2 }} md={5.9} mt={{xs:3, md:0}} mb={{xs:2,md:0}} xs={12} display={{ md: 'flex', xs: 'block' }} justifyContent={{ md: 'flex-end', xs: 'center' }}>
                <Button
                    sx={{
                        borderRadius: '22px',
                        width: { md: '183px', xs: '100%' },
                        height: { md: '43px', xs: '50px' },
                        backgroundColor: '#fff',
                        color: 'black',
                        border: '1px solid #2B3445',
                        textTransform: 'none'
                    }}

                >
                    Add new addresses
                </Button>
            </Grid>
            <Grid order={{ md: 2, xs: 1 }} container gap={1} md={12} xs={12}>
                <Grid md={6} xs={12} backgroundColor='#F8FAFD' py={'19px'} px={'23px'} border='2px solid #E0E0E0' borderRadius={2} minHeight={179}>
                    <Typography maxHeight={200} fontWeight={{ md: 500, xs: 600 }} >
                        {data?.customer?.addresses[0].firstname}  {data?.customer?.addresses[0].lastname}
                    </Typography>
                    <Typography maxHeight={800} pt={1} level="title-md" >
                        {data?.customer?.addresses[0].street[0]}
                    </Typography>
                    <Typography maxHeight={800} pt={1} level="title-md" >
                        {data?.customer?.addresses[0].street[0]}
                    </Typography>
                    <Grid pt={3} container justifyContent={'space-between'}>
                        <Typography fontWeight={{ md: 500, xs: 600 }} color={{ md: '#17468F', xs: 'black' }} level="title-lg">Default shipping</Typography>
                        <EditOutlinedIcon></EditOutlinedIcon>
                    </Grid>
                </Grid>
            </Grid>

            <Grid order={{ md: 3, xs: 3 }} md={12} xs={12} >
                {data?.customer.addresses.map((item) => (
                    <Box py={2.2} px={3.4} border='2px solid #E0E0E0' borderRadius={2} >
                        <Grid container alignItems='center' justifyContent={"space-between"}>
                            <Grid md={2} xs={12}>
                                <Typography maxHeight={300} level="title-md" fontSize={16}>{item?.firstname}</Typography>
                            </Grid>
                            <Grid md={6} xs={12} textAlign={{ md: 'center', xs: 'start' }}>
                                <Typography maxHeight={800} fullwidth level="title-lg" fontSize={16}>{item?.street[1]} {item.street[0]}</Typography>
                            </Grid>
                            <Grid md={2} xs={5}>
                                <Typography level="title-lg" textAlign={{ md: 'center', xs: 'start' }} fontSize={16}>{item.postcode}</Typography>
                            </Grid>
                            <Grid md={1} container justifyContent={'flex-end'} gap={1.8} xs={5}>
                                <Link href='#' style={{ color: '#4C4C4C' }} >
                                    <ModeEditOutlineOutlinedIcon />
                                </Link>
                                <Link href='#' style={{ color: '#EB1C23' }} >
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