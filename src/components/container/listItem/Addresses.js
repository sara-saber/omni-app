
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Card, Grid, Typography, Button, Link, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import SideBarDrawer from './Drawer/SidebarDrawer';
import { useQuery } from '@apollo/client';
import { Get_Customer_Addresses } from '@/graphql/Query';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


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
            <Grid container justifyContent={'space-between'} md={12}>
                <Typography>Addresses</Typography>
                <Button
                    sx={{
                        borderRadius: '22px',
                        maxWidth: '183px',
                        maxHeight: '68px',
                        backgroundColor: '#fff',
                        color: 'black',
                        border: '1px solid #2B3445 '
                    }}
                >
                    add new addresses
                </Button>
            </Grid>

            <Grid container gap={1} md={12}>
                <Box width={371} backgroundColor='#F8FAFD' py={1} px={3} border='2px solid #E0E0E0' borderRadius={2}>
                    <Typography>
                        {data?.customer?.addresses[0].firstname}  {data?.customer?.addresses[0].lastname}
                    </Typography>
                    <Typography level="title-md" >
                        {data?.customer?.addresses[0].street[0]}
                    </Typography>
                    <Grid container justifyContent={'space-between'}>
                        <Typography level="title-lg">Data Detailsefault shipping</Typography>
                        <EditOutlinedIcon></EditOutlinedIcon>
                    </Grid>
                </Box>
                <Box width={371} backgroundColor='#F8FAFD' py={1} px={3} border='2px solid #E0E0E0' borderRadius={2}>
                    <Typography>
                        {data?.customer?.addresses[0].firstname}  {data?.customer?.addresses[0].lastname}
                    </Typography>
                    <Typography level="title-md" >
                        {data?.customer?.addresses[0].street[0]}
                    </Typography>
                    <Grid container justifyContent={'space-between'}>
                        <Typography level="title-lg">Data Detailsefault shipping</Typography>
                        <EditOutlinedIcon></EditOutlinedIcon>
                    </Grid>
                </Box>
            </Grid>

            <Grid md={12}>
                {data?.customer.addresses.map((item) => (
                    <Box py={1} px={6} border='2px solid #E0E0E0' borderRadius={2}>
                        <Grid container alignItems='center'>
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
                                <Link  pl={2}>
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