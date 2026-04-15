import axios from "axios";

const BASE_URL = "http://KhaaoNow-env.eba-7mvd9uhh.us-east-1.elasticbeanstalk.com/api/v1/admin/restaurant/onboard";

export const getAllRequests = async (status) => {
  const response = await axios.get(BASE_URL+"/requests", {
    params: { status },
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Content-Type": "application/json"
    }
  });
  return response;
};

export const getRequestById = async (id) => {
  const response = await axios.get(`${BASE_URL}/request/${id}`,{ headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Content-Type": "application/json"
    }});
  return response;
  };

export const approveRequest = async (id) => {
  const response = await axios.post(BASE_URL+`/request/${id}/approve`, {},{
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Content-Type": "application/json"
    }
  });
  return response;
};

export const rejectRequest = (id) =>
  axios.post(`${BASE_URL}/${id}/reject`);