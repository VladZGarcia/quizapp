import Link from "next/link";

export default function SignupLoginButtons() {
  return (
      <div className="space-x-4">
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
      </div>
  );
}
