// --------------------------------------------------
// Application entry
// Controls which page is displayed.
// --------------------------------------------------

import Home from "./pages/Home";
import SubmitTopic from "./pages/SubmitTopic";

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

  return <Home />;
}

export default App;