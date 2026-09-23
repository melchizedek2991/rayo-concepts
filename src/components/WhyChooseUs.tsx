function WhyChooseUs() {
  return (
    <section className="border-y border-gray-100 bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Why Rayo Concepts
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Support built around your project
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            We focus on understanding your project requirements
            before getting started.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Benefit 1 */}
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
              ✓
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-950">
              Project-focused
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Your assigned project topic and requirements
              guide the work from the beginning.
            </p>
          </article>

          {/* Benefit 2 */}
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
              ◇
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-950">
              Flexible support
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Choose the type of academic project support
              that matches your current needs.
            </p>
          </article>

          {/* Benefit 3 */}
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
              →
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-950">
              Simple process
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Submit your topic, discuss your requirements
              and get the next steps from Rayo Concepts.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;