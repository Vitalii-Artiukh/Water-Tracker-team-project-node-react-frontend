export const adaptEntrieResForDailyRecord = entrieResponse => {
  const { userId, ...cleanEntrieRes } = entrieResponse;
  return {
    ...cleanEntrieRes,
    dailyNormProgress:
      entrieResponse.dailyNorm > 0
        ? `${Math.round(
            (entrieResponse.totalWater / entrieResponse.dailyNorm) * 100
          )}%`
        : '0%',
  };
};
