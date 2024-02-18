import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  const secondaryButtons = [
    { label: "Mark all as complete", onClick: handleMarkAllAsComplete },
    { label: "Mark all as incomplete", onClick: handleMarkAllAsIncomplete },
    { label: "Reset to initial", onClick: handleResetToInitial },
    { label: "Remove all items", onClick: handleRemoveAllItems },
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map((button) => {
        return (
          <Button
            key={button.label + button.onClick.toString()}
            buttonType="secondary"
            label={button.label}
            onClick={button.onClick}
          />
        );
      })}
    </section>
  );
}
