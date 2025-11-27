import { BrowserRouter as Router, Routes, Route } from "react-router";
import DashboardLayout from "./components/shared/DashboardLayout";
import Navbar from "./components/shared/Navbar";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            // <DashboardLayout>
            //   <h1>Dashboard Stats</h1>
            // </DashboardLayout>
            <Navbar></Navbar>
          }
        />
        <Route path="/home" element={<h1>Welcome to Home page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
