import { Layout, Router } from "components";
import { getAuth } from "firebase/auth";
import { app } from "firebaseApp";
import { useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const auth = getAuth(app);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  return (
    <Layout>
      <ToastContainer />
      <Router isAuthenticated={isAuthenticated} />
    </Layout>
  );
};

export default App;
