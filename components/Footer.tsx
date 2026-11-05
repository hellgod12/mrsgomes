import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">LinguaLearn</h3>
            <p className="text-gray-400">
              Empowering learners worldwide to master new languages with confidence.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Languages</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">English</li>
              <li className="text-gray-400">Spanish</li>
              <li className="text-gray-400">French</li>
              <li className="text-gray-400">German</li>
              <li className="text-gray-400">Japanese</li>
              <li className="text-gray-400">Italian</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>support@lingualearn.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Learning Street</li>
              <li>Education City, EC 12345</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LinguaLearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
