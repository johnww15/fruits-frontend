import CartItem from "./CartItem";
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";

export default function CartList({ user, fetchPurchaseList }) {
  const { purchaseList } = useContext(AppContext);
  const [deleteCartOpen, setDeleteCartOpen] = useState(false);
  const [deletedCartItem, setDeletedCartItem] = useState({});

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
    </>
  );
}
