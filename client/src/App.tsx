import { Route, Routes } from "react-router";
import Welcome from "./pages/Welcome/Welcome.tsx";
import Auth from "./pages/Auth/Auth.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import { useCheckToken } from "./store/useCheckToken.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
