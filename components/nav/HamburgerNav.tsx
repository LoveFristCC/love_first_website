"use client";
import { useRef, useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";

export default function HamburgerNav() {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
}
