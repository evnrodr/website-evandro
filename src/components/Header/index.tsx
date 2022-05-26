import Link from "next/link";
import { HStack } from "../HStack";

export function Header() {
  return (
    <div className="bg-raisinBlack p-4">
      <HStack className="max-w-6xl m-auto justify-between items-center">
        <div className="flex flex-col items-center">
          <Link href="/">
            <a className="font-medium text-2xl">
              Evandro Rodrigues&apos;s blog
            </a>
          </Link>
          <hr className="w-48" />
        </div>

        <HStack className="gap-16">
          <Link href="about">
            <a className="font-semibold transition ease-in-out delay-50 hover:text-emerald">
              About
            </a>
          </Link>
          <Link href="posts">
            <a className="font-semibold transition ease-in-out delay-50 hover:text-emerald">
              Posts
            </a>
          </Link>
          <Link href="contact">
            <a className="font-semibold transition ease-in-out delay-50 hover:text-emerald">
              Contact
            </a>
          </Link>
        </HStack>
      </HStack>
    </div>
  );
}
