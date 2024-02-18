import { buttonGroups } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {buttonGroups.map((item, index) => (
        <Button key={index} label={item.label} type={item.type} />
      ))}
    </section>
  );
}
