import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { updatePurchasesPaid } from "../utilities/Purchases/purchases-service";

export default function PaymentPage({ user }) {
  const { purchaseList } = useContext(AppContext);
  const navigate = useNavigate();

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

  const handlePaymentForCart = async () => {
    let response = await updatePurchasesPaid(user._id);
    console.log(response);
    navigate("/");
  };

  return (
    <>
      <h1>Total payment is:</h1>
      <h1>${calculateTotalCost(purchaseList)}</h1>
      <Button color="primary" onClick={handlePaymentForCart}>
        Pay for Cart
      </Button>
    </>
  );
}
