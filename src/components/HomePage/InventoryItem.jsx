import { Button, IconButton } from "@mui/material";
import InventoryDialog from "../Dialogs/InventoryDialog";
import {
  deleteInventoryItem,
  updateInventoryItem,
} from "../../utilities/Inventory/inventory-service";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteDialog from "../Dialogs/DeleteDialog";

export default function InventoryItem({
  item,
  user,
  fetchInventoryList,
  updateInventoryOpen,
  setUpdateInventoryOpen,
  selectedItem,
  setSelectedItem,
  deletedItem,
  setDeletedItem,
  deleteOpen,
  setDeleteOpen,
}) {
  //functions to control the state and rendering of dialogs
  const handleUpdateInventoryDialogOpen = () => {
    setUpdateInventoryOpen(true);
    setSelectedItem(item);
  };

  const handleUpdateInventoryDialogClose = () => {
    setUpdateInventoryOpen(false);
    setSelectedItem({});
  };

  const handleDeleteInventoryDialogOpen = () => {
    setDeleteOpen(true);
    setDeletedItem(item);
  };

  const handleDeleteInventoryDialogClose = () => {
    setDeleteOpen(false);
    setDeletedItem({});
  };

  //functions for api calls
  const updateInventory = async (data) => {
    await updateInventoryItem({ ...data, _id: selectedItem._id });
    fetchInventoryList(user);
  };

  const deleteInventory = async (data) => {
    await deleteInventoryItem(data._id);
    fetchInventoryList(user);
  };

  return (
    <>
      <h1>{item.name}</h1>
      <p>${item.price}</p>
      <p>{item.quantity}</p>
      <Button color="primary" onClick={handleUpdateInventoryDialogOpen}>
        Update Item
      </Button>
      <IconButton color="secondary" onClick={handleDeleteInventoryDialogOpen}>
        <DeleteIcon />
      </IconButton>

      <DeleteDialog
        open={deleteOpen}
        onClose={handleDeleteInventoryDialogClose}
        onSubmit={deleteInventory}
        item={deletedItem}
      />

      <InventoryDialog
        open={updateInventoryOpen}
        onClose={handleUpdateInventoryDialogClose}
        onSubmit={updateInventory}
      />
    </>
  );
}
