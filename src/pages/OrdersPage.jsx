import { useContext, useEffect } from "react";
import OrdersList from "../components/OrdersPage/OrdersList";
import { AppContext } from "../context/AppContext";
import { getOrdersList } from "../utilities/Purchases/purchases-service";

export default function OrdersPage({ user }) {
  const { updateOrdersList } = useContext(AppContext);

  const fetchOrdersList = async (user) => {
    const ordersListResponse = await getOrdersList(user._id);
    if (ordersListResponse.length > 0) {
      updateOrdersList(ordersListResponse);
    } else {
      updateOrdersList([]);
    }
  };

  useEffect(() => {
    if (user?.isOwner) {
      fetchOrdersList(user);
    }
  }, [user]);

  return (
    <>
      <h1>Orders to be fulfilled</h1>
      <OrdersList fetchOrdersList={fetchOrdersList} user={user} />
    </>
  );
}
