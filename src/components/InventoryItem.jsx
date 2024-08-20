export default function InventoryItem({ item }) {
  return (
    <>
      <h1>{item.name}</h1>
      <p>{item.price}</p>
      <p>{item.quantity}</p>
    </>
  );
}
