import { useContext, useEffect } from "react";
import { appContext } from "./app.context";

// created this hook for the sake of demo only
const useAdmin = () => {
  const { createAdmin } = useContext(appContext);

  useEffect(() => {
    if (createAdmin) createAdmin();
  }, []);
};

export default useAdmin;
