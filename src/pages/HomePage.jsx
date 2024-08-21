import { Button } from "@mui/material";
import {
  createInventoryItem,
  getFullInventoryList,
  getInventoryList,
} from "../utilities/Inventory/inventory-service";
import { useEffect, useState } from "react";
import InventoryList from "../components/InventoryList";
import InventoryDialog from "../components/InventoryDialog";

export default function HomePage({ user, setUser }) {
  const [inventoryList, setInventoryList] = useState([]);
  const [inventoryOpen, setInventoryOpen] = useState(false);

  const fetchInventoryList = async (user) => {
    const inventoryListResponse = await getInventoryList(user._id);
    setInventoryList(inventoryListResponse);
  };

  const fetchFullInventoryList = async () => {
    const fullInventoryListResponse = await getFullInventoryList();
    setInventoryList(fullInventoryListResponse);
  };

  useEffect(() => {
    if (user?.isOwner) {
      fetchInventoryList(user);
    } else {
      fetchFullInventoryList();
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
        user={user}
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
