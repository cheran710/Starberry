import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute"; 
import PathUpdater from "./PathUpdater";
import Layout from '../../Layout';
import { RootState } from "@/DataHandle/Redux/store";


const Login = React.lazy(() => import('../../UI/Screen/Login/login'));
const Dashboard = React.lazy(() => import('../../UI/Screen/HomePage/homepage'));
const PropertyDetailPage = React.lazy(() => import('../../UI/Screen/PropertyDetailPage/propertydetail'));

const AppRouter: React.FC = () => {
const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const routes = [
    { path: "/", element: <Login />, protected: false },
    { path: "/Login", element: <Login />, protected: false },
    { path: "/Dashboard", element: <Dashboard />, protected: true },
    {path:"/propertydetails", element:<PropertyDetailPage />,protected: true}
  ];

  return (
    <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading...</div>}>
      <PathUpdater />
      <Routes>
        {routes.map(({ path, element, protected: isProtected }) => (
          <Route
            key={path}
            path={path}
            element={
              isProtected ? (
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Layout>{element}</Layout>
                </ProtectedRoute>
              ) : (
                element
              )
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
