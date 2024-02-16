import Button from "./Button";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      <Button label="Mark all as complete" type="secondary" />
      <Button label="Mark all as incomplete" type="secondary" />
      <Button label="Reset to initial" type="secondary" />
      <Button label="Remove all items" type="secondary" />
    </section>
  );
}
