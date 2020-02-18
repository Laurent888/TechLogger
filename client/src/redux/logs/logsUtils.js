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

// SORT

// const compareDateDsc = (a, b) => {
//   let comparison = 0;
//   if (a[key] < b[key]) {
//     return (comparison = 1);
//   } else if (a[key] > b[key]) {
//     return (comparison = -1);
//   }
//   return comparison;
// };

// const compareDateAsc = (a, b) => {
//   let comparison = 0;
//   if (a[key] > b[key]) {
//     return (comparison = 1);
//   } else if (a[key] < b[key]) {
//     return (comparison = -1);
//   }
//   return comparison;
// };

export const sortArray = (logs, toggleSort, key) => {
  return logs.sort((a, b) => {
    let comparison = 0;
    if (a[key] < b[key]) {
      comparison = 1;
    } else if (a[key] > b[key]) {
      comparison = -1;
    }
    return toggleSort ? comparison : comparison * -1;
  });
};
