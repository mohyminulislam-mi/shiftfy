import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Loading from "../Loading/Loading";
import Forbidden from "../components/Forbidden";

const AdminRoutes = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return <Loading />;
  }
  if (role !== "admin") {
    return <Forbidden />;
  }
  return children;
};

export default AdminRoutes;
