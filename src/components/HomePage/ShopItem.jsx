import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { createPurchase } from "../../utilities/Purchases/purchases-service";
import ShopDialog from "../Dialogs/CartDialog";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export default function ShopItem({
  item,
  createPurchaseOpen,
  setCreatePurchaseOpen,
  purchasedItem,
  setPurchasedItem,
}) {
  const { updatePurchaseList } = useContext(AppContext);

  const handleCreatePurchaseDialogOpen = () => {
    setCreatePurchaseOpen(true);
    setPurchasedItem(item);
  };

  const handleCreatePurchaseDialogClose = () => {
    setCreatePurchaseOpen(false);
    setPurchasedItem({});
  };

  const handleCreatePurchase = async (data) => {
    console.log("purchasedItem", purchasedItem);
    const newPurchase = await createPurchase({
      ...data,
      name: purchasedItem.name,
      price: parseFloat(purchasedItem.price),
      inventoryId: purchasedItem._id,
      sellerId: purchasedItem.userId,
    });
    updatePurchaseList((prevPurchaseList) => [
      ...prevPurchaseList,
      newPurchase,
    ]);
  };

  return (
    <>
      <h1>{item.name}</h1>
      <p>${item.price}</p>
      <p>{item.quantity}</p>
      <IconButton color="secondary" onClick={handleCreatePurchaseDialogOpen}>
        <ShoppingCartIcon />
      </IconButton>

      <ShopDialog
        open={createPurchaseOpen}
        onClose={handleCreatePurchaseDialogClose}
        onSubmit={handleCreatePurchase}
        purchasedItem={purchasedItem}
      />
    </>
  );
}
