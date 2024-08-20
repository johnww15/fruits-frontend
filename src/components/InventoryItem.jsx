export default function InventoryItem({ item }) {
  console.log("inventoryitems", item);
  return (
    <>
      <h1>{item.name}</h1>
      <p>{item.price}</p>
      <p>{item.quantity}</p>
    </>
  );
}
