import { Avatar, AvatarGroup, Grid, Button, Box, Accordion, AccordionSummary, AccordionDetails, Typography, Divider, Skeleton, CircularProgress } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Get_Customer_Orders, Get_Order_Details } from '@/graphql/Query';
import OrderDetails from './Order/OrderDetails';


const Orders = () => {
    const [expanded, setExpanded] = useState(false);
    const { data, loading: orderLoading } = useQuery(Get_Order_Details)
    const [id, setId] = useState()
    const [icon,setIcon]=useState(false)
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        setId(panel)
    };

    return (
        <Box>
            <Grid md={12} xs={12} container gap={2} alignItemst={"center"}>
                <Grid sx={{ display: { md: 'none', xs: 'flex' } }} xs={4}>
                    <Avatar>
                        <KeyboardBackspaceIcon />
                    </Avatar>
                </Grid>
                <Grid xs={6}>
                    <Typography fontSize={20} fontWeight={550} justifyContent={{ xs: 'center', md: 'flex-start' }} pb={2}  >
                        My order
                    </Typography>
                </Grid>
                <Grid>
                    <Divider />
                </Grid>
            </Grid>
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
                                        <Grid sx={{ display: { md: 'none', xs: 'flex' } }} md={12} xs={12}>
                                            <Divider fullwidth color='#C4C4C4' sx={{ borderBottomWidth: '1px' }} orientation='horizontal' />
                                        </Grid>
                                        <Grid md={12} xs={12} fullwidth>
                                            <Typography sd={console.log(item?.items)} sx={{ borderRadius: 1, height: '66px', pl: '25px', display: 'flex', alignItems: 'center', backgroundColor: '#F5F8FB' }}>
                                                March
                                            </Typography>
                                        </Grid>
                                        <Grid sx={{
                                            ".MuiAccordion-root": { border: "2px solid #E0E0E0", boxShadow: 0, borderRadius: 2 }
                                        }} md={12} xs={12}>
                                            <Accordion expanded={expanded === `panel${item.id}`} onChange={handleChange(`panel${item.id}`)}>
                                                <AccordionSummary
                                                    expandIcon={icon?<ExpandMoreIcon sx={{ width: '28px', height: '28px', backgroundColor: '#E0E0E0', borderRadius: 5 }} />:
                                                    <KeyboardArrowRightIcon sx={{ width: '28px', height: '28px', backgroundColor: '#E0E0E0', borderRadius: 5 }} />}
                                                    aria-controls={`panel${item.id}-content`}
                                                    id={`panel${item.id}-header`}
                                                >
                                                    <Grid container pl={{ md: 1, xs: 0 }} justifyContent={'space-between'} alignItems={{ md: 'center' }}>
                                                        <Grid container md={2} xs={3}>
                                                            <AvatarGroup max={3} sx={{
                                                                '.MuiAvatar-root': {
                                                                    width: '40px', height: '40px',
                                                                    fontSize: 16,
                                                                    border: '2px solid #E0E0E0',
                                                                    backgroundColor: '#FFFF',
                                                                    color: '#111',
                                                                    marginLeft: '-16px'
                                                                },
                                                                // ".avatar3": { zIndex: 3, display: { xs: 'none', md: 'block' } },
                                                                // ".avatar2": { zIndex: 2, marginRight: '-5px' },
                                                                // ".avatar1": { zIndex: 1, marginRight: '-5px' },
                                                            }}>
                                                                {item?.items.map((product) => (
                                                                    <Avatar src={product.product_small_image.url} />
                                                                ))}
                                                                {/* <Avatar className='avatar1' alt="Remy Sharp" src={item?.items.product_small_image?.url} />
                                                            <Avatar className='avatar2' alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                                            <Avatar className='avatar3' alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
                                                            </AvatarGroup>
                                                        </Grid>
                                                        <Grid container justifyContent={'space-between'} order={{ md: 1, xs: 1 }} md={4} xs={3}>
                                                            <Grid md={5} xs={12} >
                                                                <Typography sx={{ display: { xs: 'none', md: 'block' }, color: '#C4C4C4', fontSize: '12px' }}>Order no</Typography>
                                                                <Typography fontWeight={600} sx={{ color: '#2B3445', fontSize: '14px' }}>{item.number}</Typography>
                                                            </Grid>
                                                            <Grid md={6} xs={12}>
                                                                <Typography sx={{ display: { xs: 'none', md: 'block' }, color: '#C4C4C4', fontSize: '12px' }}>Order date</Typography>
                                                                <Typography fontWeight={600} sx={{ color: '#2B3445', fontSize: '14px' }}>{item.order_date}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container xs={8} justifyContent={{ md: 'center' }} md={4} order={{ md: 3, xs: 4 }}>
                                                            <Button sx={{

                                                                borderColor: item?.status == "In Progress" ? "#EB1C23" : item?.status == "Pending" ? "#ED6C02" : "#EB1C23",
                                                                color: item?.status == "In Progress" ? "#EB1C23" : item?.status == "Pending" ? "#ED6C02" : "#EB1C23",
                                                                padding: '5px 17px', width: 'auto', height: '30px', borderRadius: '15px', fontSize: '14px'
                                                            }} variant="outlined" >
                                                                {item.status}
                                                            </Button>
                                                        </Grid>
                                                        <Grid md={1.5} xs={4} order={{ md: 4, xs: 3 }}>
                                                            <Typography fontWeight={600} >
                                                                {item.total.subtotal?.currency} {item?.total.subtotal.value}  </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </AccordionSummary>
                                                <AccordionDetails display={{ md: 'block', xs: 'none' }} >
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