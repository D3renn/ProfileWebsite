import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full z-50 px-5 pb-1">
      <nav className="w-full bg-white/40 backdrop-blur-lg border border-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.06)] rounded-b-3xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-medium text-[#434343] font-family: 'Ubuntu', poppins">
              Dylan&apos;s Domain
            </Link>

            <div className="hidden md:flex space-x-10">
              <Link href="/" className="text-black hover:text-neutral-600 transition-colors">
                Home
              </Link>
              <Link href="#case-studies" className="text-black hover:text-neutral-600 transition-colors">
                Projects
              </Link>
              <Link href="#about" className="text-black hover:text-neutral-600 transition-colors">
                About Me
              </Link>
              <Link href="#contact" className="text-black hover:text-neutral-600 transition-colors">
                Contact
              </Link>
            </div>

            <button className="md:hidden text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
