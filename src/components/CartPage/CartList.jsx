import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";
import { Button } from "@mui/material";

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
      {purchaseList.map((item) => (
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
      ))}
      <h1>Total cost of cart is:</h1>
      <h1>${calculateTotalCost(purchaseList)}</h1>
      <Button color="primary" onClick={handleProceedToPayment}>
        Proceed to payment
      </Button>
    </>
  );
}
