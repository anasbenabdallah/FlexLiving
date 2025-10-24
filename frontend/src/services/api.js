import axios from "axios";

const API_URL = "https://flex-living-f1ly.vercel.app/api/reviews";

export const getHostawayReviews = () => axios.get(`${API_URL}/hostaway`);

export const approveReview = (id) => axios.patch(`${API_URL}/${id}/approve`);

export const getApprovedReviews = (listingName) => {
  const url = listingName
    ? `${API_URL}/approved?listing=${encodeURIComponent(listingName)}`
    : `${API_URL}/approved`;
  return axios.get(url);
};
