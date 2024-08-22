import { Button } from "@mui/material";
import { fulfillOrderItem } from "../../utilities/Purchases/purchases-service";

export default function OrdersItem({ item, user, fetchOrdersList }) {
  const handleOrderFulfill = async (data) => {
    await fulfillOrderItem(data._id);
    fetchOrdersList(user);
  };

  return (
    <>
      <h1>{item.name}</h1>
      <p>${item.price}</p>
      <p>{item.quantity}</p>
      <Button color="primary" onClick={() => handleOrderFulfill(item)}>
        Fulfill
      </Button>
    </>
  );
}
