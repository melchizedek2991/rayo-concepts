function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            How It Works
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Getting started is simple
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {/* Step 1 */}
          <div className="relative text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-lg font-bold text-white">
              01
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-950">
              Send your topic
            </h3>

            <p className="mx-auto mt-2 max-w-sm leading-7 text-gray-600">
              Tell us your project topic, university,
              department and what service you need.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-lg font-bold text-white">
              02
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-950">
              We review
            </h3>

            <p className="mx-auto mt-2 max-w-sm leading-7 text-gray-600">
              Rayo Concepts reviews your requirements
              and discusses the project with you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-lg font-bold text-white">
              03
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-950">
              Get started
            </h3>

            <p className="mx-auto mt-2 max-w-sm leading-7 text-gray-600">
              Agree on the scope and quotation, then
              proceed with your requested service.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;