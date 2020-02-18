export const filterLogsByStatus = (logs, parameters) => {
  // If the field ALL is selected or Not closed is selected
  if (parameters.all === true) {
    return logs;
  } else if (parameters.notClosed === true) {
    return logs.filter(log => log.status !== "closed");
  }

  // Any other field selected except ALL
  const filterParameters = Object.keys(parameters).filter(
    item => parameters[item] === true
  );

  if (filterParameters.length === 0) {
    return logs;
  }

  let filteredLogs = [];
  filterParameters.forEach(param => {
    logs.forEach(log => {
      if (log.status === param) {
        filteredLogs.push(log);
      } else {
        return;
      }
    });
  });
  return filteredLogs;
};


// FILTER BY CATEGORY
export const filterLogsByCategory = (logs, parameters) => {
  if (parameters === "") {
    return logs;
  }
  return logs.filter(log => log.category === parameters);
};

// FILTER BY ASSIGNEE
export const filterLogsByAssignee = (logs, parameters) => {
  if (parameters === "") {
    return logs;
  }
  return logs.filter(log => log.assignee === parameters);
};
