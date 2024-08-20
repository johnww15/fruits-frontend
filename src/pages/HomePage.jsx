import { Button } from "@mui/material";
import { getInventoryList } from "../utilities/Inventory/inventory-service";
import { useEffect, useState } from "react";
import InventoryList from "../components/InventoryList";

export default function HomePage({ user, setUser }) {
  const [inventoryList, setInventoryList] = useState([]);

  const fetchInventoryList = async () => {
    const inventoryListResponse = await getInventoryList();
    setInventoryList(inventoryListResponse);
    console.log("inventorylistreponse", inventoryListResponse);
  };

  useEffect(() => {
    fetchInventoryList();
  }, []);

  return (
    <>
      <h1>home page</h1>
      <InventoryList inventoryList={inventoryList}/>
      <Button color="primary" onClick={() => localStorage.clear()}>
        clear localStorage
      </Button>
    </>
  );
}
