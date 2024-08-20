import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

export default function AddInventoryDialog({ open, onClose, onSubmit }) {
  const [newInventoryData, setNewInventoryData] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewInventoryData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(newInventoryData);
    setNewInventoryData({ name: "", price: 0, quantity: 0 });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Inventory Item</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Name"
          name="name"
          value={newInventoryData.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Price"
          name="price"
          value={newInventoryData.price}
          onChange={handleChange}
          fullWidth
          type="number"
        />
        <TextField
          margin="dense"
          label="Quantity"
          name="quantity"
          value={newInventoryData.quantity}
          onChange={handleChange}
          fullWidth
          type="number"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
