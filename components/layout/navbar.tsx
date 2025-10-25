import Link from "next/link";
import Image from "next/image";
import { SignupLoginButtons } from "../auth";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image
                src="/ez-logo.png"
                alt="EZ Quiz Maker"
                width={200}
                height={28}
                priority
                className="h-7 w-auto dark:invert dark:brightness-200"
              />
            </Link>
          </div>

          {/* Right side - Auth Buttons */}
          <div className="flex items-center gap-3">
            <SignupLoginButtons />
          </div>
        </div>
      </div>
    </nav>
  );
}
