import OrdersList from "../components/OrdersPage/OrdersList";

export default function OrdersPage({ user, setUser }) {
  console.log("user", user);
  return (
    <>
      <h1>orders page is here</h1>
      <OrdersList />
    </>
  );
}
