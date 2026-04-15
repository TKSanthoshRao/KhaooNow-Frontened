import { approveRequest, rejectRequest } from "../api/onboardingApi";

const handleApprove = async (id) => {
  await approveRequest(id);
  refetch(); // refresh UI
};

const handleReject = async (id) => {
  await rejectRequest(id);
  refetch();
};