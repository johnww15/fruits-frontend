import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
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

  const currentStockColor =
    item.quantity - item.sold <= 0 ? "red" : "textPrimary";

  return (
    <Card
      sx={{
        maxWidth: 250,
        mb: 2,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column", // Change to column to stack content vertically
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6" component="h2" gutterBottom>
            {item.name}
          </Typography>
          <Typography variant="body2" color="textPrimary" gutterBottom>
            ${item.price}
          </Typography>
          <Typography variant="body2" color="textPrimary" gutterBottom>
            Initial Stock: {item.quantity}
          </Typography>
          <Typography variant="body2" color={currentStockColor} gutterBottom>
            Current Stock: {item.quantity - item.sold}
          </Typography>
        </CardContent>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={handleUpdateInventoryDialogOpen}
          sx={{ flexGrow: 1, mr: 1 }} // Ensure buttons are the same height
        >
          Update
        </Button>
        <IconButton
          color="secondary"
          onClick={handleDeleteInventoryDialogOpen}
          sx={{ flexGrow: 1 }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>

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
    </Card>
  );
}
