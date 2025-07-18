import { Route, Routes } from "react-router";
import Welcome from "./pages/Welcome/Welcome.tsx";
import Auth from "./pages/Auth/Auth.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
