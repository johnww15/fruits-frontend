import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { createPurchase } from "../utilities/Purchases/purchases-service";
import ShopDialog from "./CartDialog";

export default function ShopItem({
  item,
  createPurchaseOpen,
  setCreatePurchaseOpen,
  purchasedItem,
  setPurchasedItem,
}) {
  const handleCreatePurchaseDialogOpen = () => {
    setCreatePurchaseOpen(true);
    setPurchasedItem(item);
  };

  const handleCreatePurchaseDialogClose = () => {
    setCreatePurchaseOpen(false);
    setPurchasedItem({});
  };

  const handleCreatePurchase = async (data) => {
    const newPurchase = await createPurchase({
      ...data,
      name: purchasedItem.name,
      price: parseFloat(purchasedItem.price),
      inventoryId: purchasedItem._id,
    });
    console.log("newpurchase", newPurchase);
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
