
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function SignupLoginButtons() {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-12">
      <SignedOut>
        <SignInButton />
        <SignUpButton>
          <button className="bg-blue-800 hover:bg-blue-700 text-ceramic-white rounded-xl font-medium text-sm sm:text-base py-2 px-4 sm:px-5 cursor-pointer">
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
