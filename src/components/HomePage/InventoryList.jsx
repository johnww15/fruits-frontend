import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import InventoryItem from "./InventoryItem";
import ShopItem from "./ShopItem";

export default function InventoryList({ fetchInventoryList, user }) {
  const [updateInventoryOpen, setUpdateInventoryOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [createPurchaseOpen, setCreatePurchaseOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [deletedItem, setDeletedItem] = useState({});
  const [purchasedItem, setPurchasedItem] = useState({});
  const { inventoryList } = useContext(AppContext);

  return (
    <>
      {user.isOwner ? <h1>Your inventory</h1> : <h1>Available stock</h1>}
      {user.isOwner
        ? inventoryList.map((item) => (
            <InventoryItem
              key={item.id}
              item={item}
              user={user}
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
