import Link from "next/link";
import { SignupLoginButtons } from "../auth";

export default function Navbar() {
  return (
    <nav className="shadow p-4">
      <header className="bg-white max-w-4xl mx-auto dark:bg-gray-900 shadow p-2 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Link href="/">
              <img
                src="/ez-logo.png"
                alt="quiz-maker-logo"
                className="h-7 w-70 mt-3"
                style={{ filter: "invert(1) brightness(2)" }}
              />
            </Link>
          </div>
          <SignupLoginButtons />
        </div>
      </header>
    </nav>
  );
}
