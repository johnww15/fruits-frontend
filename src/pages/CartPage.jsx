import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { getPurchaseList } from "../utilities/Purchases/purchases-service";
import CartList from "../components/CartPage/CartList";

export default function CartPage({ user }) {
  const { updatePurchaseList } = useContext(AppContext);

  const fetchPurchaseList = async (user) => {
    const purchaseListResponse = await getPurchaseList(user._id);
    if (purchaseListResponse.length > 0) {
      updatePurchaseList(purchaseListResponse);
    } else {
      updatePurchaseList([]);
    }
  };

  useEffect(() => {
    if (!user?.isOwner) {
      fetchPurchaseList(user);
    }
  }, [user]);

  return (
    <>
      <CartList fetchPurchaseList={fetchPurchaseList} user={user} />
    </>
  );
}
