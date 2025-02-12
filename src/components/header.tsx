import { Link } from "react-router-dom";
import { Image } from "./Image";

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-24 flex items-center border-b border-solid border-border">
      <Link to="/" className="flex items-center justify-center">
        <Image
          src="/images/logo-wide.webp"
          alt="AI Mastermind"
          width={80}
          height={80}
          className="max-h-20 w-auto border border-gray-200 rounded-sm"
        />
        <span className="sr-only">AI Mastermind</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          to="/"
          className="text-md font-medium hover:underline underline-offset-4"
        >
          Home
        </Link>
        <a
          href="https://www.aiforhrmastermind.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md font-medium hover:underline underline-offset-4"
        >
          AI for HR Mastermind
        </a>
        <Link
          to="/about-us"
          className="text-md font-medium hover:underline underline-offset-4"
        >
          About Us
        </Link>
      </nav>
    </header>
  );
};
