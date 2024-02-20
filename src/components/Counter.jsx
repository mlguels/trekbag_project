export default function Counter({ packedItems, totalNumberOfItems }) {
  return (
    <p>
      <b>{packedItems}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
