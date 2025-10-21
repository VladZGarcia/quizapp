import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-blue-500">404</h1>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Page Not Found
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-md">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved or deleted.
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Go Home
          </Link>

          <Link
            href="/quizInput"
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Create Quiz
          </Link>
        </div>

        <div className="pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Need help?{" "}
            <Link href="/contact" className="text-blue-500 hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
