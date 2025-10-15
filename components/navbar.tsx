export default function Navbar() {
  return (
    <nav className="shadow p-4">
      <header className=" shadow p-6 mb-6 fixed top-0 left-0 right-0">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <img
              src="/ez-logo.png"
              alt="quiz-maker-logo"
              className="h-7 w-70 mt-3"
              style={{ filter: "invert(1) brightness(2)" }}
            />
          </div>
          <div className="space-x-4">
            <button className="bg-blue-800 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
              Sign up
            </button>
            <button className="bg-blue-800 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
              Log in
            </button>
          </div>
        </div>
      </header>
    </nav>
  );
}
