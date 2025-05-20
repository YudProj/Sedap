  import React, { Suspense, useState } from "react";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import GuestLayouts from "./layouts/GuestLayouts";
// import Navbar from "./guest/Navbar";

// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";
// import Error401 from "./pages/Error401";
// import Error400 from "./pages/Error400";
// import Error403 from "./pages/Error403";
// import MainLayout from "./layouts/MainLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
// import AuthLayout from "./layouts/AuthLayouts";

const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Sidebar = React.lazy(() => import("./components/Sidebar"))
const Header = React.lazy(() => import("./components/Header"))
const Orders = React.lazy(() => import("./pages/Orders"))
const Customers = React.lazy(() => import("./pages/Customers"))
const Error401 = React.lazy(() => import("./pages/Error401"))
const Error400 = React.lazy(() => import("./pages/Error400"))
const Error403 = React.lazy(() => import("./pages/Error403"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayouts"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
const Users = React.lazy(() => import("./pages/Users"));
const Guest = React.lazy(() => import("./pages/GuestPage"));
// const guest = React.lazy(() => import("./Guest/Navbar/"));


//Quiz



// import './App.css'
// // import { createRoot } from "react-dom/client";
// import './assets/tailwind.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    

    
            <Suspense fallback={<Loading />}>
            <Routes>
            <Route path="/*" element={<Error400 />} />
                <Route path="/401" element={<Error401 />} />
                <Route path="/403" element={<Error403 />} />
                {/* <Route path="/navbar" element={<Navbar />} /> */}

              <Route element={<MainLayout />} >
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/users" element={<Users />} />
          </Route>
                
                 <Route element={<GuestLayouts />} >
                    <Route path="/guest" element={<Guest />} />
                  </Route>


                {/* <Route path="/error400" element={<Error400 />} />
                <Route path="/error401" element={<Error401 />} />
                <Route path="/error403" element={<Error403 />} /> */}
              {/* </Route> */}

            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot" element={<Forgot />} />
              </Route>
            </Routes>
            </Suspense>


      
  );
}

export default App;
