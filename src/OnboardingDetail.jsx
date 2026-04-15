import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getRequestById,
  approveRequest,
  rejectRequest,
} from "./service/onboardingApi";

const OnboardingDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await getRequestById(id);
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleApprove = async () => {
    await approveRequest(id);
    fetchData();
  };

  const handleReject = async () => {
    await rejectRequest(id);
    fetchData();
  };

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data found</p>;

  return (
    <div>
      <h2>Restaurant Details</h2>

      <p><strong>Name:</strong> {data.restaurantName}</p>
      <p><strong>Owner:</strong> {data.owner.email}</p>
      <p><strong>Status:</strong> {data.restaurantOnboardingStatus}</p>

      <h3>Address</h3>
      <p>{data.address.street}</p>
      <p>{data.address.city}, {data.address.state}</p>
      <p>{data.address.country}</p>

      {data.restaurantOnboardingStatus === "REQUESTED" && (
        <>
          <button onClick={handleApprove}>Approve</button>
          <button onClick={handleReject}>Reject</button>
        </>
      )}
    </div>
  );
};

export default OnboardingDetail;