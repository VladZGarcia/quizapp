export default function Footer() {
  return (
    <footer className="bg-gray-100 max-w-4xl mx-auto dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-6 mt-12">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} EZ Quiz Maker AI. All rights
          reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4 text-sm">
          <a href="/about" className="hover:text-blue-500">
            About
          </a>
          <a href="/privacy" className="hover:text-blue-500">
            Privacy
          </a>
          <a href="/terms" className="hover:text-blue-500">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
