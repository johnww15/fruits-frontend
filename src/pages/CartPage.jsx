import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { getPurchaseList } from "../utilities/Purchases/purchases-service";

export default function CartPage({ user, setUser }) {
  const { purchaseList, updatePurchaseList } = useContext(AppContext);

  const fetchPurchaseList = async (user) => {
    const purchaseListResponse = await getPurchaseList(user._id);
    updatePurchaseList((prevPurchaseList) => [
      ...prevPurchaseList,
      purchaseListResponse,
    ]);
    console.log("fetchPurchaseList", purchaseList);
  };

  useEffect(() => {
    if (!user?.isOwner) {
      fetchPurchaseList(user);
    }
  }, [user]);

  return (
    <>
      <h1>cart page is here</h1>
    </>
  );
}
