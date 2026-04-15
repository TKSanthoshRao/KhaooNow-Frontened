import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllRequests,approveRequest } from "./service/onboardingApi.js";

export const useOnboarding = (status) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await getAllRequests(status);

      if (res.status === 401) {
        sessionStorage.removeItem("token");
        navigate("/login");
        return;
      }

      setData(res.data);

    } catch (err) {

      if (err.response?.status === 401) {
        sessionStorage.removeItem("token");
        navigate("/login");
      }

    } finally {
      setLoading(false);
    }
  };
const approve = async (id) => {
    try {
      await approveRequest(id);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [status]);

  return { data, loading, refetch: fetchData,approve };
};