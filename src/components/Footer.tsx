function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-950 px-4 py-12 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Footer main content */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">
              Rayo<span className="text-green-400">Concepts</span>
            </h2>

            <p className="mt-4 max-w-md leading-7 text-gray-400">
              Academic project writing, editing, formatting
              and data analysis support for university students.
            </p>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
              Need help?
            </p>

            <h3 className="mt-2 text-xl font-bold">
              Let's discuss your project.
            </h3>

            <a
              href="#submit-topic"
              className="mt-5 inline-block rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              Submit Your Topic
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Rayo Concepts. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;