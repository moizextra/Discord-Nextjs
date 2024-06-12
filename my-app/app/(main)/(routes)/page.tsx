
import {
  UserButton,
} from "@clerk/nextjs";
import { ModeToggle } from "@/components/ui/mode-toggle";
export default function Home() {
  return (
<div className="flex flex-col justify-center items-center">
  <UserButton
  afterSignOutUrl="/"
  />
  This is Protected Route accessible only to logged in users
  <ModeToggle/>
</div>
  );
}
