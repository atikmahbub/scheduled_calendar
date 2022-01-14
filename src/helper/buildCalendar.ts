import moment from "moment";

export const buildCalendar = (year: string, month: string) => {
  const value = moment([year, parseInt(month) - 1]);
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");
  const day = startDay.clone().subtract(1, "day");
  const a = [];
  while (day.isBefore(endDay, "day")) {
    a.push({
      days: Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone()),
    });
  }

  return a;
};
