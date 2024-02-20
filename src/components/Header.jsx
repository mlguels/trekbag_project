import { useItemsStore } from "../stores/itemsStore";

import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  const items = useItemsStore((state) => state.items);

  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={items.length}
        packedItems={items.filter((item) => item.packed).length}
      />
    </header>
  );
}
