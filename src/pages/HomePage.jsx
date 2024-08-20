import { Button } from "@mui/material";
import { getInventoryList } from "../utilities/Inventory/inventory-service";
import { useEffect, useState } from "react";
import InventoryList from "../components/InventoryList";
import AddInventoryDialog from "../components/AddInventoryDialog";

export default function HomePage({ user, setUser }) {
  const [inventoryList, setInventoryList] = useState([]);
  const [inventoryOpen, setInventoryOpen] = useState(false);

  const fetchInventoryList = async () => {
    const inventoryListResponse = await getInventoryList();
    setInventoryList(inventoryListResponse);
    console.log("inventorylistreponse", inventoryListResponse);
  };

  useEffect(() => {
    fetchInventoryList();
  }, []);

  const handleInventoryDialogOpen = () => {
    setInventoryOpen(true);
  };

  const handleInventoryDialogClose = () => {
    setInventoryOpen(false);
  };

  //   const AddInventoryItem = async () =>
  //   }

  return (
    <>
      <h1>home page</h1>
      <InventoryList inventoryList={inventoryList} />
      <Button color="primary" onClick={handleInventoryDialogOpen}>
        Add Inventory Item
      </Button>

      <AddInventoryDialog
        open={inventoryOpen}
        onClose={handleInventoryDialogClose}
        // onSubmit={""}
      />
      <Button color="primary" onClick={() => localStorage.clear()}>
        clear localStorage
      </Button>
    </>
  );
}
