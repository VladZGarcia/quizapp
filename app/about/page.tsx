export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8">
        <h1 className="text-4xl font-bold mb-6">About EZ Quiz Maker AI</h1>
        
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <p className="text-lg">
            Welcome to EZ Quiz Maker AI - your intelligent companion for creating
            engaging quizzes and study materials powered by artificial intelligence.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p>
              We believe learning should be accessible, engaging, and efficient. Our
              mission is to help students, educators, and lifelong learners create
              high-quality quizzes from any text content in seconds.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              How It Works
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Paste or type any text content you want to learn from</li>
              <li>Our AI analyzes the content and generates relevant questions</li>
              <li>Take the quiz and get instant feedback</li>
              <li>Track your progress and improve your knowledge</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>AI-powered question generation</li>
              <li>Support for various content types</li>
              <li>Instant feedback and scoring</li>
              <li>Save and review your quiz history</li>
              <li>Dark mode support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Technology
            </h2>
            <p>
              Built with modern web technologies including Next.js, TypeScript,
              Tailwind CSS, and powered by advanced AI models to ensure accurate
              and relevant question generation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
