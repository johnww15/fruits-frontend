import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteDialog from "../Dialogs/DeleteDialog";
import { deletePurchaseItem } from "../../utilities/Purchases/purchases-service";

export default function CartItem({
  item,
  user,
  fetchPurchaseList,
  deleteCartOpen,
  setDeleteCartOpen,
  deletedCartItem,
  setDeletedCartItem,
}) {
  // functions to control the state and rendering of dialogs
  const handleDeleteCartDialogOpen = () => {
    setDeleteCartOpen(true);
    setDeletedCartItem(item);
  };

  const handleDeleteCartDialogClose = () => {
    setDeleteCartOpen(false);
    setDeletedCartItem({});
  };

  const deleteCartItem = async (data) => {
    console.log("deleteitem triggered", data);
    await deletePurchaseItem(data._id);
    fetchPurchaseList(user);
  };

  const calculateCostOfItem = (item) => {
    const total = parseFloat(item.price) * item.quantity;
    return total;
  };

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
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="body2" color="textPrimary" gutterBottom>
          ${item.price}
        </Typography>
        <Typography variant="body2" color="textPrimary" gutterBottom>
          Quantity: {item.quantity}
        </Typography>
        <Typography variant="body2" color="textPrimary" gutterBottom>
          Total Cost: ${calculateCostOfItem(item)}
        </Typography>
      </CardContent>
      <Box
        sx={{ p: 2, pt: 0, display: "flex", justifyContent: "space-between" }}
      >
        <IconButton color="secondary" onClick={handleDeleteCartDialogOpen}>
          <DeleteIcon />
        </IconButton>
      </Box>

      <DeleteDialog
        open={deleteCartOpen}
        onClose={handleDeleteCartDialogClose}
        onSubmit={deleteCartItem}
        item={deletedCartItem}
      />
    </Card>
  );
}
