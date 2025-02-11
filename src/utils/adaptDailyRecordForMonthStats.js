import { getDayMonthDate } from './dateUtils.js';

export const adaptDailyRecordForMonthStats = dailyRecord => {
  const formattedDate = getDayMonthDate(dailyRecord.date);

  return {
    date: formattedDate,
    dailyNorma: `${parseFloat((dailyRecord.dailyNorm / 1000).toFixed(2))} L`,
    percentage:
      dailyRecord.dailyNorm > 0
        ? `${Math.round(
            (dailyRecord.totalWater / dailyRecord.dailyNorm) * 100
          )}%`
        : '0%',
    entryCount: dailyRecord.entries?.length ?? 0,
    entries: dailyRecord.entries ?? [],
  };
};
