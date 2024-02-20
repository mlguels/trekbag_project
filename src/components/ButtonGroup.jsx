import Button from "./Button";

import { useItemsContext } from "../lib/hooks";

export default function ButtonGroup() {
  const {
    handleRemoveAllItems,
    handleResetToInitial,
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
  } = useItemsContext();

  return (
    <section className="button-group">
      <Button
        buttonType="secondary"
        label="Mark all as complete"
        onClick={handleMarkAllAsComplete}
      />
      <Button
        buttonType="secondary"
        label="Mark all as incomplete"
        onClick={handleMarkAllAsIncomplete}
      />
      <Button
        buttonType="secondary"
        label="Reset to initial"
        onClick={handleResetToInitial}
      />
      <Button
        buttonType="secondary"
        label="Remove all items"
        onClick={handleRemoveAllItems}
      />
    </section>
  );
}
