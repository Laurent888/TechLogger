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
  }
  return color;
};
