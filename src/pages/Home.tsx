import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import ServiceCard from "../components/ServiceCard";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import { services } from "../data/services";

function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <Header />

      {/* Hero */}
      <main>
        <Hero />

        {/* Why students choose Rayo Concepts */}
        <WhyChooseUs />

        {/* Services */}
        <section
          id="services"
          className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">

            {/* Section heading */}
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
                Our Services
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                Academic Project Services
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Choose the support you need and send us your
                project details to get started.
              </p>
            </div>

            {/* Service cards */}
            <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                />
              ))}
            </div>

          </div>
        </section>

        {/* How it works */}
        <HowItWorks />

        {/* Submit topic CTA */}
        <section
          id="submit-topic"
          className="bg-green-800 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-3xl text-center text-white">

            <p className="text-sm font-semibold uppercase tracking-wider text-green-200">
              Ready to begin?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Have your project topic?
            </h2>

            <p className="mt-4 leading-7 text-green-100 sm:text-lg">
              Send your project topic and requirements.
              We'll review the information and discuss the next steps with you.
            </p>

            <a
            href="/submit-topic"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-3.5 font-semibold text-green-800 shadow-lg transition hover:bg-gray-100"
            >
            Submit Your Topic
            </a>

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Home;