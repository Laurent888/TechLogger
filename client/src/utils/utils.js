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
  }
  console.log(color);
  return color;
};

export const defineStatusColor = status => {
  let color = "";
  switch (status) {
    case "open":
      color = "success";
      break;
    case "progress":
      color = "blue";
      break;
    case "resolved":
      color = "warning";
      break;
    case "closed":
      color = "danger";
      break;
  }
  console.log(color);
  return color;
};
