// --------------------------------------------------
// Submit Topic Page
// Collects the information Rayo Concepts needs
// before reviewing a student's project request.
// --------------------------------------------------

import { useState } from "react";
import { services } from "../data/services";

// --------------------------------------------------
// Form data type
// Describes all information collected from the student.
// --------------------------------------------------

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  university: string;
  faculty: string;
  department: string;
  projectTopic: string;
  serviceId: string;
  deadline: string;
  requirements: string;
};

// --------------------------------------------------
// Initial form values
// Keeps the form fields controlled by React state.
// --------------------------------------------------

const initialFormData: FormData = {
  fullName: "",
  phone: "",
  email: "",
  university: "",
  faculty: "",
  department: "",
  projectTopic: "",
  serviceId: "",
  deadline: "",
  requirements: "",
};

// --------------------------------------------------
// SubmitTopic component
// --------------------------------------------------

function SubmitTopic() {
  // ------------------------------------------------
  // Form state
  // Stores everything the student types/selects.
  // ------------------------------------------------

  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  // ------------------------------------------------
  // Submission state
  // Lets us know when the form is being submitted.
  // ------------------------------------------------

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  // ------------------------------------------------
  // Success state
  // Used later when the database submission succeeds.
  // ------------------------------------------------

  const [isSubmitted, setIsSubmitted] =
    useState(false);

  // ------------------------------------------------
  // Handle input changes
  // Updates the matching field in formData.
  // ------------------------------------------------

  function handleChange(
    event:
      React.ChangeEvent<
        HTMLInputElement |
        HTMLSelectElement |
        HTMLTextAreaElement
      >
  ) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  // ------------------------------------------------
  // Handle form submission
  // For Milestone 2A, this only simulates submission.
  // Supabase will be connected in Milestone 2B.
  // ------------------------------------------------

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setIsSubmitting(true);

    // Temporary simulation.
    // We will replace this with Supabase later.

    setTimeout(() => {
      console.log("Project request:", formData);

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  }

  // ------------------------------------------------
  // Success screen
  // ------------------------------------------------

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">

          <div className="rounded-3xl bg-white p-8 text-center shadow-sm sm:p-12">

            {/* Success icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl text-green-700">
              ✓
            </div>

            {/* Success heading */}
            <h1 className="mt-6 text-3xl font-bold text-gray-950">
              Request received
            </h1>

            {/* Success message */}
            <p className="mx-auto mt-4 max-w-lg leading-7 text-gray-600">
              Thank you for submitting your project details.
              Rayo Concepts will review your request and
              discuss the next steps with you.
            </p>

            {/* Back button */}
            <a
              href="/"
              className="mt-8 inline-block rounded-xl bg-green-700 px-6 py-3.5 font-semibold text-white transition hover:bg-green-800"
            >
              Back to Home
            </a>

          </div>

        </div>
      </main>
    );
  }

  // ------------------------------------------------
  // Main form
  // ------------------------------------------------

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 sm:py-16 lg:px-8">

      <div className="mx-auto max-w-3xl">

        {/* Page heading */}
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Start Your Request
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Submit Your Project Topic
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Tell us about your project and the support you need.
            Rayo Concepts will review your information and
            discuss the next steps with you.
          </p>

        </div>

        {/* Form card */}
        <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm sm:p-8">

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            {/* ---------------------------------------- */}
            {/* Student information */}
            {/* ---------------------------------------- */}

            <section>

              <h2 className="text-lg font-bold text-gray-950">
                Your Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Tell us how we can contact you.
              </p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">

                {/* Full name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="text-sm font-semibold text-gray-800"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-gray-800"
                  >
                    WhatsApp / Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 08012345678"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-800"
                  >
                    Email Address
                    <span className="ml-1 font-normal text-gray-400">
                      (Optional)
                    </span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

              </div>

            </section>

            {/* ---------------------------------------- */}
            {/* Academic information */}
            {/* ---------------------------------------- */}

            <section className="border-t border-gray-100 pt-8">

              <h2 className="text-lg font-bold text-gray-950">
                Academic Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Give us the academic details related to your project.
              </p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">

                {/* University */}
                <div>
                  <label
                    htmlFor="university"
                    className="text-sm font-semibold text-gray-800"
                  >
                    University
                  </label>

                  <select
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  >
                    <option value="">
                      Select your university
                    </option>

                    <option value="FUOYE">
                      Federal University Oye-Ekiti (FUOYE)
                    </option>

                    <option value="EKSU">
                      Ekiti State University (EKSU)
                    </option>

                    <option value="University of Abuja">
                      University of Abuja
                    </option>

                    <option value="FUL">
                      Federal University Lokoja (FUL)
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                {/* Faculty */}
                <div>
                  <label
                    htmlFor="faculty"
                    className="text-sm font-semibold text-gray-800"
                  >
                    Faculty
                  </label>

                  <input
                    id="faculty"
                    name="faculty"
                    type="text"
                    value={formData.faculty}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Faculty of Education"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                {/* Department */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="department"
                    className="text-sm font-semibold text-gray-800"
                  >
                    Department
                  </label>

                  <input
                    id="department"
                    name="department"
                    type="text"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    placeholder="Enter your department"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

              </div>

            </section>

            {/* ---------------------------------------- */}
            {/* Project information */}
            {/* ---------------------------------------- */}

            <section className="border-t border-gray-100 pt-8">

              <h2 className="text-lg font-bold text-gray-950">
                Project Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Give us the details of the project you need help with.
              </p>

              <div className="mt-5 space-y-5">

                {/* Project topic */}
                <div>
                  <label
                    htmlFor="projectTopic"
                    className="text-sm font-semibold text-gray-800"
                  >
                    Project Topic
                  </label>

                  <textarea
                    id="projectTopic"
                    name="projectTopic"
                    value={formData.projectTopic}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Enter your assigned project topic"
                    className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="serviceId"
                    className="text-sm font-semibold text-gray-800"
                  >
                    Service Needed
                  </label>

                  <select
                    id="serviceId"
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  >
                    <option value="">
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service.id}
                        value={service.id}
                      >
                        {service.name} — Starting from ₦
                        {service.startingPrice.toLocaleString()}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Deadline */}
                <div>
                  <label
                    htmlFor="deadline"
                    className="text-sm font-semibold text-gray-800"
                  >
                    Expected Deadline
                    <span className="ml-1 font-normal text-gray-400">
                      (Optional)
                    </span>
                  </label>

                  <input
                    id="deadline"
                    name="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                {/* Additional requirements */}
                <div>
                  <label
                    htmlFor="requirements"
                    className="text-sm font-semibold text-gray-800"
                  >
                    Additional Requirements
                    <span className="ml-1 font-normal text-gray-400">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about any supervisor instructions, formatting requirements or other important details."
                    className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

              </div>

            </section>

            {/* ---------------------------------------- */}
            {/* Submit button */}
            {/* ---------------------------------------- */}

            <div className="border-t border-gray-100 pt-8">

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-green-700 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit Project Request"}
              </button>

              <p className="mt-3 text-center text-xs leading-5 text-gray-500">
                Your information will be reviewed before any
                project scope or final price is agreed.
              </p>

            </div>

          </form>

        </div>

      </div>

    </main>
  );
}

export default SubmitTopic;