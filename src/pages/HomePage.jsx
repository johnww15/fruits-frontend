import { Button } from "@mui/material";
import {
  createInventoryItem,
  getInventoryList,
} from "../utilities/Inventory/inventory-service";
import { useEffect, useState } from "react";
import InventoryList from "../components/InventoryList";
import AddInventoryDialog from "../components/AddInventoryDialog";

export default function HomePage({ user, setUser }) {
  const [inventoryList, setInventoryList] = useState([]);
  const [inventoryOpen, setInventoryOpen] = useState(false);

  const fetchInventoryList = async () => {
    const inventoryListResponse = await getInventoryList();
    setInventoryList(inventoryListResponse);
  };

  useEffect(() => {
    if (user?.isOwner) {
      fetchInventoryList();
    }
  }, [user]);

  const handleInventoryDialogOpen = () => {
    setInventoryOpen(true);
  };

  const handleInventoryDialogClose = () => {
    setInventoryOpen(false);
  };

  const AddInventoryItem = async (data) => {
    const newInventoryItem = await createInventoryItem(data);
    setInventoryList((prevInventoryList) => [
      ...prevInventoryList,
      newInventoryItem,
    ]);
  };

  return (
    <>
      <h1>home page</h1>
      <InventoryList inventoryList={inventoryList} />

      {user?.isOwner && (
        <>
          <Button color="primary" onClick={handleInventoryDialogOpen}>
            Add Inventory Item
          </Button>

          <AddInventoryDialog
            open={inventoryOpen}
            onClose={handleInventoryDialogClose}
            onSubmit={AddInventoryItem}
          />
        </>
      )}

      <Button color="primary" onClick={() => localStorage.clear()}>
        clear localStorage
      </Button>
    </>
  );
}
