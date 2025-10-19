import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import SignUp from "./pages/Auth/SignUp.jsx";
import SignIn from "./pages/Auth/SignIn.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx"
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import ResetPassword from "./pages/Auth/ResetPassword.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import EmailVerification from "./pages/Auth/EmailVerification.jsx";
import UploadReport from "./pages/Dashboard/UploadReport.jsx";
import TrackVitals from "./pages/Dashboard/TrackVitals.jsx";
import Profile from "./pages/Dashboard/Profile.jsx";
import Reports from "./pages/Dashboard/Reports.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/verify-email/:token" element={<EmailVerification />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        {/* 🔹 Admin Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload-reports" element={<UploadReport />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/vitals" element={<TrackVitals />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;