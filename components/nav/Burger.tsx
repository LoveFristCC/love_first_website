interface BurgerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Burger({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (arg: boolean) => void;
}) {
  return (
    <div
      className={`styledBurger ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className={`${open ? "open" : ""}`} />
      <div className={`${open ? "open" : ""}`} />
      <div className={`${open ? "open" : ""}`} />
    </div>
  );
}
