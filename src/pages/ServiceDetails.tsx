// --------------------------------------------------
// Service details page
// Displays information for one service based on
// the service ID in the URL.
// --------------------------------------------------

import { services } from "../data/services";

function ServiceDetails() {
  // ------------------------------------------------
  // Get the service ID from the URL
  //
  // Example:
  // /services/project-writing
  //
  // The last part is:
  // project-writing
  // ------------------------------------------------

  const pathParts = window.location.pathname.split("/");
  const serviceId = pathParts[pathParts.length - 1];

  // ------------------------------------------------
  // Find the matching service
  // ------------------------------------------------

  const service = services.find(
    (item) => item.id === serviceId
  );

  // ------------------------------------------------
  // Handle an invalid service URL
  // ------------------------------------------------

  if (!service) {
    return (
      <main className="min-h-screen bg-white px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Service Not Found
          </h1>

          <p className="mt-4 text-gray-600">
            The service you are looking for does not exist.
          </p>

          <a
            href="/services"
            className="mt-6 inline-block rounded-lg bg-gray-900 px-5 py-3 font-medium text-white"
          >
            View All Services
          </a>
        </div>
      </main>
    );
  }

  // ------------------------------------------------
  // Display the selected service
  // ------------------------------------------------

  return (
    <main className="min-h-screen bg-white px-4 py-16">
      <div className="mx-auto max-w-3xl">

        <a
          href="/services"
          className="text-sm font-medium text-green-700 hover:underline"
        >
          ← Back to Services
        </a>

        <div className="mt-8">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {service.name}
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            {service.description}
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-sm text-gray-500">
              Starting from
            </p>

            <p className="mt-1 text-3xl font-bold text-gray-900">
              ₦{service.startingPrice.toLocaleString()}
            </p>

            <div className="mt-6">
              <p className="font-semibold text-gray-900">
                What's included
              </p>

              <p className="mt-2 text-gray-600">
                {service.includes}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">
              How to get started
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Submit your assigned project topic and requirements.
              Rayo Concepts will review your request and discuss
              the scope, pricing, and next steps with you.
            </p>
          </div>

          <a
            href="/submit-topic"
            className="mt-8 inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
          >
            Submit Your Topic
          </a>
        </div>
      </div>
    </main>
  );
}

export default ServiceDetails;