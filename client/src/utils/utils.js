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
