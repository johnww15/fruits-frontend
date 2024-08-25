import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { createPurchase } from "../../utilities/Purchases/purchases-service";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export default function HistoryItem({ item }) {
  const { updatePurchaseList } = useContext(AppContext);
  const paidAtDate = new Date(item.paidAt).toDateString();
  const paidAtTime = new Date(item.paidAt).toLocaleTimeString();

  const handleQuickBuy = async () => {
    console.log("item", item);
    const newPurchase = await createPurchase({
      name: item.name,
      price: parseFloat(item.price),
      quantity: item.quantity,
      inventoryId: item.inventoryId,
      buyerId: item.buyerId,
      sellerId: item.sellerId,
    });
    updatePurchaseList((prevPurchaseList) => [
      ...prevPurchaseList,
      newPurchase,
    ]);
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
        <Typography variant="body2" color="textPrimary" gutterBottom>
          Total Cost: ${item.quantity * item.price}
        </Typography>
        <Typography variant="body2" color="textPrimary" gutterBottom>
          Paid: {String(item.isPaid)}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: item.isFulfilled ? "green" : "red", fontWeight: "bold" }}
          gutterBottom
        >
          Fulfilled: {String(item.isFulfilled)}
        </Typography>
        <Typography variant="body2" color="textPrimary">
          Paid At: {paidAtDate} {paidAtTime}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          onClick={handleQuickBuy}
        >
          Quick Buy
        </Button>
      </Box>
    </Card>
  );
}
