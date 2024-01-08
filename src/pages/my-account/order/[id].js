import OrderDetails from "@/components/container/listItem/Order/OrderDetails";
import { Get_Order_Details } from "@/graphql/Query";
import { useQuery } from "@apollo/client";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const orderPage = () => {
    const router = useRouter()
    const { data, loading: orderLoading } = useQuery(Get_Order_Details)
    const { id } = router.query
    const [orderDetails, setOrderDetails] = useState()
    useEffect(() => {
        if (data?.customer.orders.items) {
            const orders = data?.customer.orders.items
            const order = orders.find((x) => (
                x.id === id
            ))
            console.log(order);
            setOrderDetails(order)
        }
    }, [data])

    return (
        <Grid>
            {console.log(orderDetails)}
            <OrderDetails DataDetails={orderDetails} />
        </Grid>
    );
}

export default orderPage;