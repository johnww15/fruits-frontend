import OrdersItem from "./OrdersItem";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { Container, Grid } from "@mui/material";

export default function OrdersList({ fetchOrdersList, user }) {
  const { ordersList } = useContext(AppContext);
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {ordersList.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <OrdersItem
              key={item.id}
              item={item}
              user={user}
              fetchOrdersList={fetchOrdersList}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
