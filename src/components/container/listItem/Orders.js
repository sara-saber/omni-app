import { Avatar, AvatarGroup, Grid, Button, Box, Accordion, AccordionSummary, AccordionDetails, Typography, Divider, Skeleton, CircularProgress, useMediaQuery } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Get_Customer_Orders, Get_Order_Details } from '@/graphql/Query';
import OrderDetails from './Order/OrderDetails';
import { useRouter } from 'next/router';
import PageName from './shared/PageName/PageName';


const Orders = () => {
    const [expanded, setExpanded] = useState(false);
    const { data, loading: orderLoading } = useQuery(Get_Order_Details)
    const [id, setId] = useState()
    const [icon, setIcon] = useState(false)
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [filterDate, setFilterDate] = useState()
    const screenWidth = useMediaQuery('(max-width:768px)')
    const router = useRouter()
    useEffect(() => {
        const filtered = data?.customer.orders.items.map(item => (
            month[new Date(item.order_date.split(' ')[0]).getMonth()]
        ))
        console.log(filtered)
        setFilterDate(filtered)
        console.log(filterDate)
    }, data)
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        setId(panel)
        setIcon(!icon)
    };

    return (
        <Box>
            <PageName name={'My Orders'} position={'center'} url={'/my-account/dashboard'}>
            </PageName>
            {
                orderLoading ?
                    <Box alignItems={"center"} display={"flex"} justifyContent={'center'} height={200} fullwidth>
                        <CircularProgress size={80} />
                    </Box>
                    :
                    <Grid container gap={2}>

                        {
                            data?.customer.orders.items.map(
                                item => (
                                    <Grid md={12} xs={12} fullwidth>
                                        <Typography sd={console.log(item?.items)} sx={{
                                            borderRadius: 1, height: '66px', pl: '25px', display: 'flex', alignItems: 'center',
                                            backgroundColor: '#F5F8FB'
                                        }}>
                                            {month[new Date(item?.order_date.split(' ')[0]).getMonth()]}
                                        </Typography>
                                    </Grid>
                                )
                            )

                        }

                        {
                            data?.customer.orders.items.map
                                ((item) => (
                                    <>
                                        <Grid sx={{ display: { md: 'none', xs: 'flex' } }} md={12} xs={12}>
                                            <Divider fullwidth color='#C4C4C4' sx={{ borderBottomWidth: '1px' }} orientation='horizontal' />
                                        </Grid>
                                        <Grid sx={{
                                            ".MuiAccordion-root": {
                                                border: "1px solid #E0E0E0", boxShadow: 0, borderRadius: 2,
                                                boxShadow: (expanded && id === `panel${item.id}`) ? '0px 0px 20px #0000001F' : '0px 0px 0px #0000001F'
                                            }
                                        }} md={12} xs={12}>
                                            <Accordion expanded={expanded === `panel${item.id}`}
                                                onChange={screenWidth ? () => router.push(`/my-account/order/${item.id}`) : handleChange(`panel${item.id}`)}>
                                                <AccordionSummary
                                                    textAlign={'center'}
                                                    aria-controls={`panel${item.id}-content`}
                                                    id={`panel${item.id}-header`}
                                                    sx={{
                                                        px: 2
                                                    }}
                                                >
                                                    <Grid rowGap={4} container columnGap={1} justifyContent={'space-between'} alignItems={{ md: 'center', xs: 'flex-start' }}>
                                                        <Grid md={1.5} xs={2.7} container>
                                                            <AvatarGroup max={screenWidth ? 2 : 3} sx={{
                                                                '.MuiAvatar-root': {
                                                                    width: '40px', height: '40px',
                                                                    fontSize: 16,
                                                                    border: '2px solid #E0E0E0',
                                                                    backgroundColor: '#FFFF',
                                                                    color: '#111',
                                                                    marginLeft: '-16px',
                                                                    display: (expanded && id === `panel${item.id}`) ? 'none' : 'flex'
                                                                },

                                                            }}>
                                                                {item?.items.map((product) => (
                                                                    <Avatar src={product.product_small_image.url} />
                                                                ))}
                                                            </AvatarGroup>
                                                        </Grid>
                                                        <Grid md={3.5} lg={3} xs={4.9} container gap={{ md: 1.2, xs: 0.2 }} justifyContent={'space-between'} order={{ md: 1, xs: 1 }}>
                                                            <Grid>
                                                                <Typography sx={{ display: { xs: 'none', md: 'block' }, color: '#C4C4C4', fontSize: '12px' }}>Order no</Typography>
                                                                <Typography fontWeight={600} sx={{ color: '#2B3445', fontSize: '14px' }}>{screenWidth ? '#' : null}{item.number}</Typography>
                                                            </Grid>
                                                            <Grid >
                                                                <Typography sx={{ display: { xs: 'none', md: 'block' }, color: '#C4C4C4', fontSize: '12px' }}>Order date</Typography>
                                                                <Typography sx={{ color: '#2B3445', fontSize: '14px' }}>{new Date(item?.order_date.split(' ')[0]).getDay()} {month[new Date(item?.order_date.split(' ')[0]).getMonth()]}   {new Date(item?.order_date.split(' ')[0]).getFullYear()}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid md={3} order={{ md: 3, xs: 4 }} xs={8} display={'flex'} justifyContent={{ md: 'center', xs: 'flex-start' }} >
                                                            <Button sx={{
                                                                display: (expanded && id === `panel${item.id}`) ? 'none' : 'flex',
                                                                '&:hover': {
                                                                    backgroundColor: '#FFFF',
                                                                    borderColor: item?.status == "In Progress" ? "#EB1C23" : item?.status == "Pending" ? "#ED6C02" : "#EB1C23"
                                                                },

                                                                borderColor: item?.status == "In Progress" ? "#EB1C23" : item?.status == "Pending" ? "#ED6C02" : "#EB1C23",
                                                                color: item?.status == "In Progress" ? "#EB1C23" : item?.status == "Pending" ? "#ED6C02" : "#EB1C23",
                                                                padding: '5px 17px', width: 'auto', height: '30px', borderRadius: '15px', fontSize: '14px'
                                                            }} variant="outlined" >
                                                                {item.status}
                                                            </Button>
                                                        </Grid>
                                                        <Grid textAlign={'right'} md={2} xs={3.6} order={{ md: 4, xs: 3 }}>
                                                            <Typography fontWeight={600} >
                                                                {item.total.subtotal?.currency} {item?.total.subtotal.value}  </Typography>
                                                        </Grid>
                                                        <Grid md={0.5} order={{ md: 5, xs: 5 }}>
                                                            {screenWidth ?
                                                                <KeyboardArrowRightIcon color='black' sx={{ width: '28px', height: '28px', backgroundColor: '#F4F5F5', borderRadius: 5 }} />
                                                                :
                                                                expanded && (id === `panel${item.id}`) ? <KeyboardArrowDownIcon sx={{ width: '28px', height: '28px', backgroundColor: '#F4F5F5', borderRadius: 5 }} /> :
                                                                    <KeyboardArrowRightIcon sx={{ width: '28px', height: '28px', backgroundColor: '#F4F5F5', borderRadius: 5 }} />
                                                            }

                                                        </Grid>

                                                    </Grid>
                                                </AccordionSummary>
                                                <AccordionDetails >
                                                    <OrderDetails DataDetails={item} />
                                                </AccordionDetails>
                                            </Accordion>
                                        </Grid >
                                    </>

                                ))
                        }
                    </Grid >
            }
        </Box >
    );
}

export default Orders;