import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

export default function InventoryDialog({ open, onClose, onSubmit }) {
  const [newInventoryData, setNewInventoryData] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert value to a number if it's the 'price' or 'quantity' field
    let formattedValue = value;

    if (name === "price" || name === "quantity") {
      formattedValue = parseFloat(value);

      // Ensure value is positive and not NaN
      formattedValue =
        isNaN(formattedValue) || formattedValue < 0 ? 0 : formattedValue;

      // Limit to two decimal places for price
      if (name === "price") {
        formattedValue = parseFloat(formattedValue.toFixed(2));
      }
    }

    setNewInventoryData((prevValues) => ({
      ...prevValues,
      [name]: formattedValue,
    }));
  };

  const handleSubmit = () => {
    onSubmit(newInventoryData);
    setNewInventoryData({ name: "", price: "", quantity: "" });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Inventory Item</DialogTitle>
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
