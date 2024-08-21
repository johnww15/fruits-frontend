import { useState } from "react";
import InventoryItem from "./InventoryItem";

export default function InventoryList({ inventoryList, fetchInventoryList }) {
  const [updateInventoryOpen, setUpdateInventoryOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [deletedItem, setDeletedItem] = useState({});
  return (
    <>
      {inventoryList.map((item) => (
        <InventoryItem
          key={item.id}
          item={item}
          fetchInventoryList={fetchInventoryList}
          updateInventoryOpen={updateInventoryOpen}
          setUpdateInventoryOpen={setUpdateInventoryOpen}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          deletedItem={deletedItem}
          setDeletedItem={setDeletedItem}
          deleteOpen={deleteOpen}
          setDeleteOpen={setDeleteOpen}
        />
      ))}
    </>
  );
}
