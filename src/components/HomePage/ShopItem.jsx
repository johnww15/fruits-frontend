import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
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

  const currentStock = item.quantity - item.sold;
  const isSoldOut = currentStock === 0;

  return (
    <Card
      sx={{
        maxWidth: 250,
        mb: 2,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="body2" color="textPrimary" gutterBottom>
          ${item.price}
        </Typography>
        <Typography variant="body2" color="textPrimary" gutterBottom>
          Initial Stock: {item.quantity}
        </Typography>
        <Typography variant="body2" color="textPrimary" gutterBottom>
          {isSoldOut ? "Sold Out" : `Current Stock: ${currentStock}`}
        </Typography>
      </CardContent>
      <Box>
        <IconButton
          color="secondary"
          onClick={handleCreatePurchaseDialogOpen}
          disabled={isSoldOut}
        >
          <ShoppingCartIcon />
        </IconButton>
      </Box>

      <ShopDialog
        open={createPurchaseOpen}
        onClose={handleCreatePurchaseDialogClose}
        onSubmit={handleCreatePurchase}
        purchasedItem={purchasedItem}
      />
    </Card>
  );
}
