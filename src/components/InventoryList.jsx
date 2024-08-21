import { useState } from "react";
import InventoryItem from "./InventoryItem";
import ShopItem from "./ShopItem";

export default function InventoryList({
  inventoryList,
  fetchInventoryList,
  user,
}) {
  const [updateInventoryOpen, setUpdateInventoryOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [createPurchaseOpen, setCreatePurchaseOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [deletedItem, setDeletedItem] = useState({});
  const [purchasedItem, setPurchasedItem] = useState({});

  return (
    <>
      {user.isOwner
        ? inventoryList.map((item) => (
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
          ))
        : inventoryList.map((item) => (
            <ShopItem
              key={item.id}
              item={item}
              createPurchaseOpen={createPurchaseOpen}
              setCreatePurchaseOpen={setCreatePurchaseOpen}
              purchasedItem={purchasedItem}
              setPurchasedItem={setPurchasedItem}
            />
          ))}
    </>
  );
}
