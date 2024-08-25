import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export default function CartList({ user, fetchPurchaseList }) {
  const { purchaseList } = useContext(AppContext);
  const [deleteCartOpen, setDeleteCartOpen] = useState(false);
  const [deletedCartItem, setDeletedCartItem] = useState({});
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate("/payment");
  };

  function calculateTotalCost(list) {
    const total = list.reduce((total, item) => {
      const price = parseFloat(item.price);
      const quantity = item.quantity;
      return total + price * quantity;
    }, 0);
    if (total > 0) {
      return total.toFixed(2);
    } else {
      return "0.00";
    }
  }

  return (
    <>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {purchaseList.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <CartItem
                key={item.id}
                item={item}
                user={user}
                fetchPurchaseList={fetchPurchaseList}
                deleteCartOpen={deleteCartOpen}
                setDeleteCartOpen={setDeleteCartOpen}
                deletedCartItem={deletedCartItem}
                setDeletedCartItem={setDeletedCartItem}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Total cost of cart is:
        </Typography>
        <Typography variant="h4" component="h1" color="primary" gutterBottom>
          ${calculateTotalCost(purchaseList)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleProceedToPayment}
        >
          Proceed to payment
        </Button>
      </Box>
    </>
  );
}
