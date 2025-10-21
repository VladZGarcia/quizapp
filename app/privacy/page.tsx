export default function PrivacyPage() {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Last Updated: October 21, 2025
        </p>

        <div className="space-y-8 text-gray-700 dark:text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Introduction
            </h2>
            <p>
              At EZ Quiz Maker AI, we take your privacy seriously. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our application.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Information We Collect
            </h2>
            <h3 className="text-xl font-medium mb-2">Personal Information</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Name and email address (when you create an account)</li>
              <li>Profile information you choose to provide</li>
              <li>
                Payment information (processed securely by third-party
                providers)
              </li>
            </ul>

            <h3 className="text-xl font-medium mb-2">Usage Information</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Quiz content you create or input</li>
              <li>Quiz results and performance data</li>
              <li>Device information and browser type</li>
              <li>IP address and location data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and maintain our service</li>
              <li>To generate AI-powered quiz questions</li>
              <li>To improve and personalize your experience</li>
              <li>To communicate with you about updates and features</li>
              <li>To analyze usage patterns and improve our service</li>
              <li>To detect and prevent fraud or abuse</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Data Storage and Security
            </h2>
            <p>
              We use industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Encrypted data transmission (SSL/TLS)</li>
              <li>Secure cloud storage with regular backups</li>
              <li>Access controls and authentication</li>
              <li>Regular security audits and updates</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Third-Party Services
            </h2>
            <p className="mb-2">We use the following third-party services:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Clerk:</strong> For authentication and user management
              </li>
              <li>
                <strong>Cohere AI:</strong> For AI-powered quiz generation
              </li>
              <li>
                <strong>Vercel:</strong> For hosting and deployment
              </li>
            </ul>
            <p className="mt-2">
              These services have their own privacy policies and data handling
              practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Your Rights
            </h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Cookies
            </h2>
            <p>
              We use cookies and similar technologies to enhance your
              experience, analyze usage, and remember your preferences. You can
              control cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Children&apos;s Privacy
            </h2>
            <p>
              Our service is not intended for users under 13 years of age. We do
              not knowingly collect personal information from children under 13.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the &quot;Last Updated&quot; date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> privacy@ezquizmaker.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
