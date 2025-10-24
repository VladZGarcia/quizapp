import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function SignupLoginButtons() {
  return (
    <div className="flex items-center gap-3">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="px-4 py-2 bg-gray-500 dark:bg-yellow-600 text-white font-semibold text-sm rounded-lg hover:bg-gray-400 dark:hover:bg-yellow-500 transition-all duration-200 shadow-sm hover:shadow-md">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox:
                "w-9 h-9 ring-2 ring-gray-200 dark:ring-gray-700 hover:ring-blue-500 dark:hover:ring-blue-400 transition-all",
            },
          }}
        />
      </SignedIn>
    </div>
  );
}
