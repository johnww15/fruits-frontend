import { IconButton } from "@mui/material";
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

  return (
    <>
      <h1>{item.name}</h1>
      <p>${item.price}</p>
      <p>{item.quantity}</p>
      <IconButton color="secondary" onClick={handleDeleteCartDialogOpen}>
        <DeleteIcon />
      </IconButton>

      <DeleteDialog
        open={deleteCartOpen}
        onClose={handleDeleteCartDialogClose}
        onSubmit={deleteCartItem}
        item={deletedCartItem}
      />
    </>
  );
}
