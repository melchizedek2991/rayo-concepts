import type { Service } from "../data/services";

type ServiceCardProps = {
  service: Service;
};

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      
      {/* Service name */}
      <h3 className="text-xl font-bold text-gray-900">
        {service.name}
      </h3>

      {/* Service description */}
      <p className="mt-3 text-sm leading-6 text-gray-600">
        {service.description}
      </p>

      {/* Starting price */}
      <div className="mt-6">
        <p className="text-sm text-gray-500">
          Starting from
        </p>

        <p className="text-2xl font-bold text-green-700">
          ₦{service.startingPrice.toLocaleString()}
        </p>
      </div>

      {/* What the service includes */}
      <div className="mt-5">
        <p className="font-semibold text-gray-900">
          Includes
        </p>

        <p className="mt-1 text-sm leading-6 text-gray-600">
          {service.includes}
        </p>
      </div>

      {/* Service action */}
      <a
        href="/submit-topic"
        className="mt-auto pt-6"
      >
        <span className="block w-full rounded-lg bg-green-700 px-4 py-3 text-center font-semibold text-white transition hover:bg-green-800">
          Get Started
        </span>
      </a>
    </article>
  );
}

export default ServiceCard;