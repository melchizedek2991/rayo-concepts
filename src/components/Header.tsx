function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-gray-950 sm:text-2xl"
        >
          Rayo<span className="text-green-700">Concepts</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-gray-600 transition hover:text-green-700"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-sm font-medium text-gray-600 transition hover:text-green-700"
          >
            Services
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-gray-600 transition hover:text-green-700"
          >
            How It Works
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-600 transition hover:text-green-700"
          >
            Contact
          </a>
        </nav>

        {/* Header CTA */}
        <a
          href="/submit-topic"
          className="rounded-full bg-green-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800 sm:px-5"
        >
          Submit Topic
        </a>
      </div>
    </header>
  );
}

export default Header;