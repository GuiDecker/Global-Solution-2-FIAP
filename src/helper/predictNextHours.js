export function predictNextHours(data, hoursToPredict = 24) {
  const dataValues = Object.values(data);
  const timeLabels = Object.keys(data);

  const dataLength = dataValues.length;

  // Calculate the moving average trend (basic prediction model)
  const avgLastNHours = (n) => {
    if (dataLength < n) return 0;
    return dataValues.slice(-n).reduce((sum, val) => sum + val, 0) / n;
  };

  // Predict next hours using the last N-hour average (e.g., 5-hour average)
  const prediction = [];
  for (let i = 1; i <= hoursToPredict; i++) {
    prediction.push(avgLastNHours(5)); // Moving average over the last 5 hours
  }

  // Generate future time labels
  const startTime = new Date(timeLabels[dataLength - 1]);
  const futureLabels = [];
  for (let i = 1; i <= hoursToPredict; i++) {
    const futureTime = new Date(startTime.getTime() + i * 60 * 60 * 1000);
    futureLabels.push(futureTime.toISOString().slice(0, 13) + ":00");
  }

  return { prediction, futureLabels };
}
