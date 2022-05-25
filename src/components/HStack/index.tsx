import { ReactNode } from "react";

interface HStackProps {
  children: ReactNode;
  className?: String;
}

export function HStack({ children, className }: HStackProps) {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
}
