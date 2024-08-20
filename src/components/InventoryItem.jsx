import { Button } from "@mui/material";
import InventoryDialog from "./InventoryDialog";
import { updateInventoryItem } from "../utilities/Inventory/inventory-service";

export default function InventoryItem({
  item,
  fetchInventoryList,
  updateInventoryOpen,
  setUpdateInventoryOpen,
  selectedItem,
  setSelectedItem,
}) {
  const handleUpdateInventoryDialogOpen = () => {
    setUpdateInventoryOpen(true);
    console.log("itemclicked", item);
    setSelectedItem(item);
  };

  const handleUpdateInventoryDialogClose = () => {
    setUpdateInventoryOpen(false);
    setSelectedItem({});
  };

  const updateInventory = async (data) => {
    await updateInventoryItem({ ...data, _id: selectedItem._id });
    fetchInventoryList();
  };

  return (
    <>
      <h1>{item.name}</h1>
      <p>${item.price}</p>
      <p>{item.quantity}</p>
      <Button color="primary" onClick={handleUpdateInventoryDialogOpen}>
        Update Item
      </Button>

      <InventoryDialog
        open={updateInventoryOpen}
        onClose={handleUpdateInventoryDialogClose}
        onSubmit={updateInventory}
      />
    </>
  );
}
