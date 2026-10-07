// --------------------------------------------------
// Services page
// Displays all Rayo Concepts services.
// Service information comes from the shared services data.
// --------------------------------------------------

import Header from "../components/Header";
import { services } from "../data/services";

function Services() {
  return (
  <>
    <Header />

    <main className="min-h-screen bg-white">
      {/* ------------------------------------------------
          Page introduction
      ------------------------------------------------ */}

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Our Services
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Get professional academic project writing, editing,
            formatting, and data analysis support tailored to
            your project requirements.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------
          Service cards
      ------------------------------------------------ */}

      <section className="px-4 pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {service.name}
              </h2>

              <p className="mt-3 text-gray-600">
                {service.description}
              </p>

              <div className="mt-5">
                <p className="text-sm text-gray-500">
                  Starting from
                </p>

                <p className="mt-1 text-2xl font-bold text-gray-900">
                  ₦{service.startingPrice.toLocaleString()}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-sm font-medium text-gray-700">
                  Includes:
                </p>

                <p className="mt-1 text-gray-600">
                  {service.includes}
                </p>
              </div>

              <a
                href="/submit-topic"
                className="mt-6 inline-block rounded-lg bg-gray-900 px-5 py-2.5 font-medium text-white"
              >
                Submit Your Topic
              </a>
            </article>
          ))}
        </div>
      </section>
      </main>
    </>
  );
}

export default Services;