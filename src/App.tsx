// --------------------------------------------------
// Application entry
// Controls which page is displayed.
// --------------------------------------------------

import Home from "./pages/Home";
import SubmitTopic from "./pages/SubmitTopic";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";

function App() {
  // ------------------------------------------------
  // Temporary page routing
  // We will introduce React Router when we have
  // multiple real pages.
  // ------------------------------------------------

  const path = window.location.pathname;

  if (path === "/submit-topic") {
    return <SubmitTopic />;
  }

  if (path === "/admin/login") {
    return <AdminLogin />;
  }

  if (path === "/admin") {
    return <Admin />;
  }

  return <Home />;
}

export default App;