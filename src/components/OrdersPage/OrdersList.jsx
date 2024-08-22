import OrdersItem from "./OrdersItem";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export default function OrdersList({ fetchOrdersList, user }) {
  const { ordersList } = useContext(AppContext);
  return (
    <>
      {ordersList.map((item) => (
        <OrdersItem
          key={item.id}
          item={item}
          user={user}
          fetchOrdersList={fetchOrdersList}
        />
      ))}
    </>
  );
}
