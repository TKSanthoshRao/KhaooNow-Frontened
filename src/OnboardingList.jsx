import { useState } from "react";
import { useOnboarding } from "./useOnboarding";
import { approveRequest } from "./service/onboardingApi";
const OnboardingList = () => {
  const [status, setStatus] = useState("REQUESTED");
  const { data, loading,approve } = useOnboarding(status);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Onboarding Requests</h2>

      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="REQUESTED">Requested</option>
        <option value="APPROVED">Approved</option>
        <option value="REJECTED">Rejected</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>City</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.restaurantName}</td>
              <td>{item.owner.email}</td>
              <td>{item.address.city}</td>
              <td>{item.status}</td>
              <td>
                <button onClick={() => approve(item.id)}>Approve</button>
                <button>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OnboardingList;