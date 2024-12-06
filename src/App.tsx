import { Layout, Router } from "components";
import { getAuth } from "firebase/auth";
import { app } from "firebaseApp";
import { useState } from "react";

const App = () => {
  const auth = getAuth(app);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  return (
    <Layout>
      <Router isAuthenticated={isAuthenticated} />
    </Layout>
  );
};

export default App;
