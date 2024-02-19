import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ totalNumberOfItems, packedItems }) {
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        packedItems={packedItems}
      />
    </header>
  );
}
