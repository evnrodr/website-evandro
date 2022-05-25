import { ReactNode } from "react";

interface VStackProps {
  children: ReactNode;
  className?: String;
}

export function VStack({ children, className }: VStackProps) {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
}
