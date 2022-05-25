import { VStack } from "../VStack";
import { Avatar } from "./components/Avatar";
import { Author } from "./components/Author";
import { Description } from "./components/Description";

export function Profile() {
  return (
    <VStack>
      <Avatar />
      <Author />
      <Description />
    </VStack>
  );
}
