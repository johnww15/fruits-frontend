import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { fulfillOrderItem } from "../../utilities/Purchases/purchases-service";

export default function OrdersItem({ item, user, fetchOrdersList }) {
  const handleOrderFulfill = async (data) => {
    await fulfillOrderItem(data._id);
    fetchOrdersList(user);
  };

  return (
    <Card
      sx={{
        maxWidth: 250,
        mb: 2,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="body2" color="textPrimary" gutterBottom>
          ${item.price}
        </Typography>
        <Typography variant="body2" color="textPrimary" gutterBottom>
          Quantity: {item.quantity}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2, pt: 0, display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOrderFulfill(item)}
        >
          Fulfill
        </Button>
      </Box>
    </Card>
  );
}
