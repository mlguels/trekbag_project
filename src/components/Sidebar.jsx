import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

import { useItemsContext } from "../lib/hooks";

export default function Sidebar() {
  const addItem = useItemsContext((context) => context.addItem);

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />

      <ButtonGroup />
    </div>
  );
}
