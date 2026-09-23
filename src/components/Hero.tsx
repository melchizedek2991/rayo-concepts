function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">

        {/* Hero text */}
        <div>

          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center rounded-full border border-green-100 bg-green-50 px-4 py-2">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-600"></span>

            <span className="text-sm font-semibold text-green-800">
              Academic Project Support
            </span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Your project topic.
            <span className="block text-green-700">
              Our professional support.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Rayo Concepts provides academic project writing, editing,
            formatting and data analysis services tailored to your
            project requirements.
          </p>

          {/* Hero buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#submit-topic"
              className="rounded-xl bg-green-700 px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-green-700/20 transition hover:bg-green-800"
            >
              Submit Your Topic
            </a>

            <a
              href="#services"
              className="rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-center font-semibold text-gray-800 transition hover:border-green-200 hover:bg-green-50"
            >
              Explore Services
            </a>

          </div>

          {/* Small trust message */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
            <span>✓ Student-focused support</span>
            <span>✓ Flexible project assistance</span>
          </div>

        </div>

        {/* Hero visual */}
        <div className="relative">

          {/* Decorative background */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-100 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-emerald-100 blur-3xl"></div>

          {/* Main visual card */}
          <div className="relative rounded-3xl bg-gray-950 p-5 shadow-2xl sm:p-7">

            {/* Browser-style top */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-5">
              <span className="h-3 w-3 rounded-full bg-white/20"></span>
              <span className="h-3 w-3 rounded-full bg-white/20"></span>
              <span className="h-3 w-3 rounded-full bg-white/20"></span>
            </div>

            {/* Project card */}
            <div className="mt-6 rounded-2xl bg-white p-5 sm:p-6">

              <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                Project Support
              </p>

              <h2 className="mt-3 text-xl font-bold text-gray-950 sm:text-2xl">
                Got your project topic?
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Tell us your topic, university and requirements.
                We'll help you get started.
              </p>

              {/* Mini progress */}
              <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                    1
                  </span>

                  <span className="text-sm font-medium text-gray-700">
                    Submit your topic
                  </span>
                </div>

                <div className="ml-4 h-5 border-l border-dashed border-gray-300"></div>

                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-500">
                    2
                  </span>

                  <span className="text-sm font-medium text-gray-700">
                    We review your requirements
                  </span>
                </div>

                <div className="ml-4 h-5 border-l border-dashed border-gray-300"></div>

                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-500">
                    3
                  </span>

                  <span className="text-sm font-medium text-gray-700">
                    Get started
                  </span>
                </div>

              </div>

              <a
                href="#submit-topic"
                className="mt-6 block rounded-xl bg-green-700 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Start Your Request
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;