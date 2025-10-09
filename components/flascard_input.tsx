import Flashcards from "./flashcards";
import Quiz from "./Quiz";

export default function FlashcardInput() {
  return (
    <section>
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-4">FlashcardMaker</h1>
      </div>
      <div>
        <p className="mb-4">
          Welcome to FlashcardMaker! This app helps you create flashcards for
          studying. Enter a topic and the app will generate flashcards for you.
        </p>
        <div>
          <input
            type="text"
            className="border h-40 w-full p-2 mb-4"
            placeholder="Enter a topic..."
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Generate Flashcards
          </button>
        </div>
          </div>
    </section>
  );
}
