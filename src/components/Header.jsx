import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Header() {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img src="/logo.png" alt="" className="h-20" />
        </Link>

        <Button variant="outline" className="cursor-pointer">
          Login
        </Button>
      </nav>
    </>
  );
}
