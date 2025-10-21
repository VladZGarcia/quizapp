import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 max-w-4xl mx-auto dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-6 mt-12">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} EZ Quiz Maker AI. All rights
          reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4 text-sm">
          <Link href="/about" className="hover:text-blue-500 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-blue-500 transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-blue-500 transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
