import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";

export default function SignupLoginButtons() {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <SignedOut>
        <SignInButton />
        <SignUpButton>
          <button className="bg-blue-800 hover:bg-blue-700 text-ceramic-white rounded-xl font-medium text-sm sm:text-base py-2 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}

{
  /* <div className="space-x-4">
          <Link href="/?show=true">
            <button className="bg-blue-800 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
              Sign up
            </button>
          </Link>
          <Link href="/?show=true">
            <button className="bg-blue-800 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
              Log in
            </button>
          </Link>
      </div> */
}
