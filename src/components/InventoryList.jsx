import InventoryItem from "./InventoryItem";

export default function InventoryList({ inventoryList }) {
  return (
    <>
      {inventoryList.map((item) => (
        <InventoryItem key={item.id} item={item} />
      ))}
    </>
  );
}
