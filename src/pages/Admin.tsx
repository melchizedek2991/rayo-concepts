import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

type ServiceRequest = {
  id: string;
  full_name: string;
  phone: string;
  email: string | null;
  university: string;
  faculty: string;
  department: string;
  project_topic: string;
  service_id: string;
  deadline: string | null;
  requirements: string | null;
  status: string;
  quoted_price: number | null;
  created_at: string;
};

function Admin() {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [isLoadingRequests, setIsLoadingRequests] = useState(true);
  const [requestError, setRequestError] = useState("");
  const [selectedRequest, setSelectedRequest] =
  useState<ServiceRequest | null>(null);

  // --------------------------------------------------
  // Check admin login and load project requests
  // --------------------------------------------------

  useEffect(() => {
    async function checkAuth() {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        window.location.href = "/admin/login";
        return;
      }

      setIsAuthenticated(true);
      setIsCheckingAuth(false);

      const { data: requestsData, error } = await supabase
        .from("service_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Request fetch error:", error);

        setRequestError(
          "We could not load project requests."
        );

        setIsLoadingRequests(false);

        return;
      }

      setRequests(requestsData || []);
      setIsLoadingRequests(false);
    }

    checkAuth();
  }, []);

  // --------------------------------------------------
  // Logout admin
  // --------------------------------------------------

  async function handleLogout() {
    await supabase.auth.signOut();

    window.location.href = "/admin/login";
  }

  // --------------------------------------------------
  // Show loading screen while checking authentication
  // --------------------------------------------------

  if (isCheckingAuth) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Checking authentication...</p>
      </main>
    );
  }

  // --------------------------------------------------
  // Do not show dashboard if user is not authenticated
  // --------------------------------------------------

  if (!isAuthenticated) {
    return null;
  }

  // --------------------------------------------------
  // Admin dashboard
  // --------------------------------------------------

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Rayo Concepts Admin
            </h1>

            <p className="mt-1 text-gray-600">
              Manage project requests.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white"
          >
            Logout
          </button>
        </div>

        <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Project Requests
          </h2>
          {selectedRequest && (
  <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-gray-900">
        Request Details
      </h3>

      <button
        type="button"
        onClick={() => setSelectedRequest(null)}
        className="text-sm font-medium text-gray-600 hover:text-gray-900"
      >
        Close
      </button>
    </div>

    <div className="mt-5 grid gap-4 md:grid-cols-2">
      <div>
        <p className="text-sm text-gray-500">Student</p>
        <p className="font-medium text-gray-900">
          {selectedRequest.full_name}
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-500">Phone</p>
        <p className="font-medium text-gray-900">
          {selectedRequest.phone}
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-500">Email</p>
        <p className="font-medium text-gray-900">
          {selectedRequest.email || "Not provided"}
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-500">University</p>
        <p className="font-medium text-gray-900">
          {selectedRequest.university}
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-500">Faculty</p>
        <p className="font-medium text-gray-900">
          {selectedRequest.faculty}
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-500">Department</p>
        <p className="font-medium text-gray-900">
          {selectedRequest.department}
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-500">Service</p>
        <p className="font-medium text-gray-900">
          {selectedRequest.service_id}
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-500">Deadline</p>
        <p className="font-medium text-gray-900">
          {selectedRequest.deadline || "Not provided"}
        </p>
      </div>

      <div className="md:col-span-2">
        <p className="text-sm text-gray-500">Project Topic</p>
        <p className="font-medium text-gray-900">
          {selectedRequest.project_topic}
        </p>
      </div>
 
      <div className="md:col-span-2">
        <p className="text-sm text-gray-500">Requirements</p>
        <p className="whitespace-pre-wrap font-medium text-gray-900">
          {selectedRequest.requirements || "No additional requirements"}
        </p>
      </div>

      <div>
              <label
                htmlFor="request-status"
                className="text-sm text-gray-500"
              >
                Status
              </label>

              <select
                id="request-status"
                value={selectedRequest.status}
                onChange={(event) =>
                  setSelectedRequest({
                    ...selectedRequest,
                    status: event.target.value,
                  })
                }
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
              >
                <option value="new">New</option>
                <option value="reviewing">Reviewing</option>
                <option value="quoted">Quoted</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <div>
                <label
                  htmlFor="quoted-price"
                  className="text-sm text-gray-500"
                >
                  Quoted Price
                </label>

                <input
                  id="quoted-price"
                  type="number"
                  min="0"
                  value={selectedRequest.quoted_price ?? ""}
                  onChange={(event) =>
                    setSelectedRequest({
                      ...selectedRequest,
                      quoted_price:
                        event.target.value === ""
                          ? null
                          : Number(event.target.value),
                    })
                  }
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Enter quoted price"
                />
            </div>
            <div className="md:col-span-2">
              <button
                type="button"
                onClick={async () => {
                  const { error } = await supabase
                    .from("service_requests")
                    .update({
                      quoted_price: selectedRequest.quoted_price,
                        status: selectedRequest.status,
                    })
                    .eq("id", selectedRequest.id);

                  if (error) {
                    console.error("Quote update error:", error);

                    alert("We could not save the quoted price.");

                    return;
                  }

                  alert("Quoted price saved successfully.");
                }}
                className="rounded-lg bg-gray-900 px-4 py-2 font-medium text-white"
              >
                Save Changes
              </button>
            </div>
        </div>
      </div>
    )}

          {isLoadingRequests && (
            <p className="mt-4 text-gray-600">
              Loading requests...
            </p>
          )}

          {requestError && (
            <p className="mt-4 text-red-600">
              {requestError}
            </p>
          )}

          {!isLoadingRequests &&
            !requestError &&
            requests.length === 0 && (
              <p className="mt-4 text-gray-600">
                No project requests yet.
              </p>
            )}

          {!isLoadingRequests &&
            !requestError &&
            requests.length > 0 && (
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[900px] border-collapse">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="px-4 py-3 text-sm font-semibold">
                        Student
                      </th>

                      <th className="px-4 py-3 text-sm font-semibold">
                        University
                      </th>

                      <th className="px-4 py-3 text-sm font-semibold">
                        Service
                      </th>

                      <th className="px-4 py-3 text-sm font-semibold">
                        Topic
                      </th>

                      <th className="px-4 py-3 text-sm font-semibold">
                        Status
                      </th>

                      <th className="px-4 py-3 text-sm font-semibold">
                        Submitted
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {requests.map((request) => (
                      <tr
                        key={request.id}
                        className="border-b"
                      >
                        <td className="px-4 py-3">
                          <button
                            type="button"
                            onClick={() => setSelectedRequest(request)}
                            className="font-medium text-blue-600 hover:underline"
                          >
                            {request.full_name}
                          </button>
                        </td>

                        <td className="px-4 py-3">
                          {request.university}
                        </td>

                        <td className="px-4 py-3">
                          {request.service_id}
                        </td>

                        <td className="max-w-xs px-4 py-3">
                          {request.project_topic}
                        </td>

                        <td className="px-4 py-3">
                          {request.status}
                        </td>

                        <td className="px-4 py-3">
                          {new Date(
                            request.created_at
                          ).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
        </div>
      </div>
    </main>
  );
}

export default Admin;