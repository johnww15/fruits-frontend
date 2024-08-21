import { Button } from "@mui/material";
import {
  createInventoryItem,
  getInventoryList,
} from "../utilities/Inventory/inventory-service";
import { useEffect, useState } from "react";
import InventoryList from "../components/InventoryList";
import InventoryDialog from "../components/InventoryDialog";

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

  const addInventoryItem = async (data) => {
    const newInventoryItem = await createInventoryItem(data);
    setInventoryList((prevInventoryList) => [
      ...prevInventoryList,
      newInventoryItem,
    ]);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    window.location.reload();
  };

  return (
    <>
      <h1>home page</h1>
      <InventoryList
        fetchInventoryList={fetchInventoryList}
        inventoryList={inventoryList}
      />

      {user?.isOwner && (
        <>
          <Button color="primary" onClick={handleInventoryDialogOpen}>
            Add Inventory Item
          </Button>

          <InventoryDialog
            open={inventoryOpen}
            onClose={handleInventoryDialogClose}
            onSubmit={addInventoryItem}
          />
        </>
      )}

      <Button color="primary" onClick={handleLogout}>
        logout
      </Button>
    </>
  );
}
