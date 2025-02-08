export const MONTHS = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
};

export const getDayMonthDate = date => {
  const [_, month, day] = date.split('-');

  if (!month || !day) return;

  const formattedMonth = Object.entries(MONTHS).find(
    ([_, value]) => value === month
  );

  return `${Number(day)}, ${formattedMonth[0]}`;
};

export const getTodayDate = () => {
  const todayDate = new Date().toISOString().split('T')[0];

  return todayDate;
};
