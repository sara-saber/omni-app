import Grid from '@mui/material/Grid';
import Card from '@mui/joy/Card';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {Typography, Button, Link } from '@mui/material';
import { useEffect, useState } from 'react';
import SideBarDrawer from './Drawer/SidebarDrawer';
import { useQuery } from '@apollo/client';
import { Get_Customer_Addresses } from '@/graphql/Query';


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
            <Grid md={6}>
                <Typography>Addresses</Typography>
            </Grid>
            <Grid textAlign='end' md={5} xs={12}>
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
           
            {data?.customer.addresses.map((item) => (
                <Grid md={12} xs={12}>
                    <Card key={item.id}>
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
                            <Grid md={3}>
                                <Link pl={2}>
                                    <ModeEditOutlineOutlinedIcon />
                                </Link>
                                <Link color='#EB1C23' pl={2}>
                                    <DeleteOutlineOutlinedIcon />
                                </Link>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            ))}
            <SideBarDrawer customer={data?.customer} SideBarDrawer drawer={drawer} setDrawer={setDrawer}  ></SideBarDrawer>
        </Grid >

    );
}

export default Addresses;