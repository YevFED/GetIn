import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// export const useCheckToken = (): void => {
//   const navigate = useNavigate();

//   console.log("checking");
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/dashboard");
//     } else {
//       navigate("/auth");
//     }
//   }, []);
// };

// BUG: Resolve problem with useEffect console multiply

export const useCheckToken = (): void => {
  const navigate = useNavigate();

  console.log("Checking...");
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/auth");
    } else {
      navigate("/dashboard");
    }
  }, []);
};
