import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

export default function DeleteDialog({ open, onClose, onSubmit, item }) {
  const handleDeleteSubmit = () => {
    onSubmit(item);
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to delete <strong>{item.name}</strong>?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDeleteSubmit} color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
