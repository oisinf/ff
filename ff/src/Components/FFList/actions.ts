import axios from "axios";
export const getFantasyFootballData = async () => {
  const response = await axios({
    method: "GET",
    url: "api/bootstrap-static/"
  })
    .then(res => {
      console.log("response", res);
      return res;
    })
    .catch(err => {
      console.log("error");
      return null;
    });
  return response;
};
