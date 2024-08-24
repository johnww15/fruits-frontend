import { Button } from "@mui/material";
import {
  createInventoryItem,
  getFullInventoryList,
  getInventoryList,
} from "../utilities/Inventory/inventory-service";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import InventoryList from "../components/HomePage/InventoryList";
import InventoryDialog from "../components/Dialogs/InventoryDialog";

export default function HomePage({ user, setUser }) {
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const { updateInventoryList } = useContext(AppContext);

  const fetchInventoryList = async (user) => {
    const inventoryListResponse = await getInventoryList(user._id);
    updateInventoryList(inventoryListResponse);
  };

  const fetchFullInventoryList = async () => {
    const fullInventoryListResponse = await getFullInventoryList();
    updateInventoryList(fullInventoryListResponse);
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
    updateInventoryList((prevInventoryList) => [
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
      <InventoryList fetchInventoryList={fetchInventoryList} user={user} />

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
