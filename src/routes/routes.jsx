// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import DashboardLayout from "../layouts/layouts";
// import Tickets from "../pages/tickets/tickets";
// import Analytics from "../pages/analytics/analytics";
// import Dashboard from "../pages/dashboard/dashboard";
// import UserAudit from "../pages/user-audit/user-audit";
// import Leaderboard from "../pages/leaderboard/leaderboard";
// import Setting from "../pages/setting/setting";
// import Login from "../pages/login/login";


// export default function MyRouts() {
//    return (
//       <>
//          <BrowserRouter>
//             <Routes>
//                  <Route path="" element={<Login />} />
//                <Route path="/" element={<DashboardLayout />}>
//                   <Route path="/" element={<Tickets />} />
//                   <Route path="/analytics" element={<Analytics />} />
//                   <Route path="/dashboard" element={<Dashboard />} />
//                   <Route path="/user-audit" element={<UserAudit />} />
//                   <Route path="/leaderboard" element={<Leaderboard />} />
//                  <Route path="/setting" element={<Setting />} />
//                </Route>
//             </Routes>
//          </BrowserRouter>
//       </>
//    )
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "../pages/login";
import DashboardLayout from "../layouts/layouts";
import Tickets from "../pages/tickets/tickets";
import Analytics from "../pages/analytics/analytics";
import Dashbooard from "../pages/dashboard/dashboard";
import UserAudit from "../pages/user-audit/user-audit";
import Leaderboard from "../pages/leaderboard/leaderboard";
import Setting from "../pages/setting/setting";
import Loginn from "../pages/login/login";
const Login = lazy(() => import("../pages/login/login"));
const Dashboard = lazy(() => import("../pages/dashboard/dashboard"));

export default function MyRoutes() {
   return (
      <>
         <Suspense fallback={null}>
            <BrowserRouter>
               <Routes>
                  <Route path="/login" element={<Loginn />} />

                  <Route
                     path="/"
                     element={
                        <ProtectedRoute>
                           <DashboardLayout />
                        </ProtectedRoute>
                     }
                  >
                     <Route path="/" element={<Tickets />} />
                     <Route path="/dashboard" element={<Dashbooard />} />
                     <Route path="/analytics" element={<Analytics />} />
                     <Route path="/user-audit" element={<UserAudit />} />
                     <Route path="/leaderboard" element={<Leaderboard />} />
                     <Route path="/settings" element={<Setting />} />
                  </Route>
               </Routes>
            </BrowserRouter>
         </Suspense>
      </>
   );
}