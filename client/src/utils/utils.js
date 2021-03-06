import axios from "axios";

export const defineRiskColor = risk => {
  let color = "";
  switch (risk) {
    case "low":
      color = "success";
      break;
    case "normal":
      color = "blue";
      break;
    case "high":
      color = "warning";
      break;
    case "critical":
      color = "danger";
      break;
    default:
      color = "blue";
  }

  return color;
};

export const defineStatusColor = status => {
  let color = "";
  switch (status) {
    case "open":
      color = "open";
      break;
    case "progress":
      color = "progress";
      break;
    case "resolved":
      color = "resolved";
      break;
    case "closed":
      color = "closed";
      break;
    default:
      color = "progress";
  }
  return color;
};

export const checkEmptyField = object => {
  const keys = Object.keys(object).filter(item => object[item] === "");
  if (keys.length > 0) {
    return true;
  } else {
    return false;
  }
};

export const setAuthToken = async token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
    const user = await axios.get("http://localhost:4000/api/auth");
    return user.data.user;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};
