export default function Counter({ totalNumberOfItems, packedItems }) {
  return (
    <p>
      <b>{packedItems}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
