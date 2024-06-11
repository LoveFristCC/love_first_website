import Link from "next/link";

interface MenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (arg: boolean) => void;
}) {
  return (
    <div className={`styledMenu ${open ? "open" : ""}`}>
      <Link href="/prayer" onClick={() => setOpen(!open)}>
        Prayer
      </Link>

      <Link href="/watch-online" onClick={() => setOpen(!open)}>
        Online
      </Link>

      <Link href="/about-love-first" onClick={() => setOpen(!open)}>
        About
      </Link>

      <Link href="/connect" onClick={() => setOpen(!open)}>
        Connect
      </Link>

      <Link href="/give" onClick={() => setOpen(!open)}>
        Give
      </Link>

      <Link href="/contact" onClick={() => setOpen(!open)}>
        Contact
      </Link>
    </div>
  );
}
