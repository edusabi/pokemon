import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "./PageLoader/PageLoader";

const RouteLoader = ({ children }) => {
  const location = useLocation();

  // Sempre começa carregando
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location.key]);

  if (loading) return <PageLoader />;

  return children;
};

export default RouteLoader;
