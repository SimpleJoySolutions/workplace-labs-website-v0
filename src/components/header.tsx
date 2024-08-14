import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-24 flex items-center">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <Image src="/images/logo.webp" alt="AI Mastermind" width={180} height={180} className="max-h-20 w-auto" />
        <span className="sr-only">AI Mastermind</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/ai-for-hr-mastermind" className="text-md font-medium hover:underline underline-offset-4" prefetch={false}>
          AI for HR Mastermind
        </Link>
      </nav>
    </header>
  );
};

