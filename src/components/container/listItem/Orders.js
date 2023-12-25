import { Avatar, AvatarGroup, Grid, Button, Box, Accordion, AccordionSummary, AccordionDetails, Typography, Divider, Skeleton, CircularProgress } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Get_Customer_Orders, Get_Order_Details } from '@/graphql/Query';
import OrderDetails from './Order/OrderDetails';


const Orders = () => {
    const [expanded, setExpanded] = useState(false);
    const [visibility, setVisibility] = useState(false)
    const { data, loading: orderLoading } = useQuery(Get_Order_Details)
    const [id, setId] = useState()
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        setVisibility(!visibility)
        setId(panel)

        // setVisibility((prev) => ({
        //     ...prev,
        //     [id]: !prev[id]
        // }))
        // visibility: visibility[item.id] ? "hidden" : "visible",
        // const stockStatus = useState(props?.product.stock_status)
    };

    return (
        <Box>
            <Grid md={12} xs={3}>
                <Typography justifyContent={{ xs: 'center', md: 'flex-start' }} pb={2} >
                    My orders
                </Typography>
            </Grid>
            {/* {console.log(data)}
            {console.log(data?.customer?.orders?.items)} */}
            {
                orderLoading ?
                    <Box alignItems={"center"} display={"flex"} justifyContent={'center'} height={200} fullwidth>
                        <CircularProgress size={80} />
                    </Box>
                    :
                    <Grid container gap={2}>
                        {
                            data?.customer.orders.items.map
                                ((item) => (
                                    <>
                                        <Grid sx={{ display: { md: 'none', xs: 'flex' } }} xs={3}  >
                                            <Avatar>
                                                <KeyboardBackspaceIcon />
                                            </Avatar>
                                        </Grid>
                                        <Grid sx={{ display: { md: 'none', xs: 'flex' } }} md={12} xs={12}>
                                            <Divider fullwidth color='#C4C4C4' sx={{ borderBottomWidth: '1px' }} orientation='horizontal' />
                                        </Grid>
                                        <Grid md={12} xs={12} fullwidth>
                                            <Typography sx={{ height: '66px', pl: '25px', display: 'flex', alignItems: 'center', backgroundColor: '#F5F8FB' }}>
                                                March
                                            </Typography>
                                        </Grid>
                                        <Grid md={12} xs={12}>
                                            <Accordion sx={{
                                               ".css-1elwnq4-MuiPaper-root-MuiAccordion-root:first-of-type":{backgroundColor:'red',border:"2px solid #E0E0E0",boxShadow:0},
                                            ".css-1elwnq4-MuiPaper-root-MuiAccordion-root:first-of-type":{borderRadius:20},

                                            }}  expanded={expanded === `panel${item.id}`} onChange={handleChange(`panel${item.id}`)}>
                                                <AccordionSummary
                                                    expandIcon={<ChevronRightIcon />}
                                                    aria-controls={`panel${item.id}-content`}
                                                    id={`panel${item.id}-header`}
                                                >
                                                    <Grid container m={0.1} p={0.5} gap={1} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                                                        <AvatarGroup sx={{
                                                            visibility: visibility && id === `panel${item.id}` ? "hidden" : "visible",
                                                            '.MuiAvatar-root': { width: '30px', height: '30px', fontSize: 15 },
                                                            ".avatar3": { zIndex: 3, display: { xs: 'none', md: 'block' } },
                                                            ".avatar2": { zIndex: 2, marginRight: '-5px' },
                                                            ".avatar1": { zIndex: 1, marginRight: '-5px' },
                                                        }} max={3}>
                                                            <Avatar className='avatar1' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                                            <Avatar className='avatar2' alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                                            <Avatar className='avatar3' alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                                        </AvatarGroup>
                                                        <Grid order={{ md: 1, xs: 1 }}>
                                                            <Typography sx={{ display: { xs: 'none', md: 'block' }, color: '#C4C4C4', fontSize: '12px' }}>Order no</Typography>
                                                            <Typography sx={{ color: '#2B3445', fontSize: '14px' }}>{item.number}</Typography>
                                                        </Grid>
                                                        <Grid order={{ md: 2, xs: 4 }}>
                                                            <Typography sx={{ display: { xs: 'none', md: 'block' }, color: '#C4C4C4', fontSize: '12px' }}>Order date</Typography>
                                                            <Typography sx={{ color: '#2B3445', fontSize: '14px' }}>{item.order_date}</Typography>
                                                        </Grid>
                                                        <Grid order={{ md: 3, xs: 3 }}>
                                                            <Button sx={{
                                                                visibility: visibility && id === `panel${item.id}` ? "hidden" : "visible",
                                                                borderColor: item?.status == "In Progress" ? "#EB1C23" : item?.status == "Pending" ? "#ED6C02" : "#EB1C23",
                                                                color: item?.status == "In Progress" ? "#EB1C23" : item?.status == "Pending" ? "#ED6C02" : "#EB1C23",
                                                                padding: '5px 17px', width: 'auto', height: '30px', borderRadius: '15px', fontSize: '14px'
                                                            }} variant="outlined" >
                                                                {item.status}
                                                            </Button>
                                                        </Grid>
                                                        <Grid order={{ md: 4, xs: 2 }}>
                                                            <Typography>
                                                                {item.total.subtotal?.currency} {item?.total.subtotal.value}  </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </AccordionSummary>
                                                <AccordionDetails >
                                                    <OrderDetails DataDetails={item} />
                                                </AccordionDetails>
                                            </Accordion>
                                        </Grid>
                                    </>

                                ))
                        }
                    </Grid >
            }
        </Box >
    );
}

export default Orders;