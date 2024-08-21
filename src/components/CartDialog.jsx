import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

export default function ShopDialog({ open, onClose, onSubmit, purchasedItem }) {
  const [newPurchaseData, setNewPurchaseData] = useState({
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const maxQuantity = purchasedItem.quantity;

    // Convert value to a number
    let formattedValue = parseFloat(value);

    // Ensure value is positive, not NaN, and less than or equal to maxQuantity
    if (isNaN(formattedValue) || formattedValue < 1) {
      formattedValue = ""; // Set to empty string if invalid
    } else if (formattedValue > maxQuantity) {
      formattedValue = maxQuantity; // Cap the value at maxQuantity
    }

    setNewPurchaseData((prevValues) => ({
      ...prevValues,
      [name]: formattedValue,
    }));
  };

  const handleSubmit = () => {
    onSubmit(newPurchaseData);
    setNewPurchaseData({ quantity: "" });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Purchase Item</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Quantity"
          name="quantity"
          value={newPurchaseData.quantity}
          onChange={handleChange}
          fullWidth
          type="number"
          inputProps={{ min: 1, max: purchasedItem.quantity }}
          error={newPurchaseData.quantity === ""}
          helperText={
            newPurchaseData.quantity === ""
              ? "Please enter a valid quantity"
              : `Maximum available: ${purchasedItem.quantity}`
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          disabled={newPurchaseData.quantity === ""}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
