import axios from "axios";

const useLocation = async () => {
  const res = await axios.get(
    `https://api.geoapify.com/v1/ipinfo?&apiKey=${process.env.NEXT_PUBLIC_Geo_API_Key}`
  );

  if (res.status !== 200) alert("Error in getting your location");
  // console.log(res.data.city);
  window.sessionStorage.setItem("Location", res.data.city.name);
  return res.data;
};

export default useLocation;
