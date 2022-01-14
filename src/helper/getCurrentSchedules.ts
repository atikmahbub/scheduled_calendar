import moment from "moment";

export const getCurrentSchedules = (schedules: any[], date: string) => {
  return schedules
    .filter(
      (item) =>
        moment(item.date).format("YYYY-MM-DD") ===
        moment(date).format("YYYY-MM-DD")
    )
    .sort(function (a, b) {
      let momentA = +moment(a.date);
      let momentB = +moment(b.date);
      return momentA - momentB;
    });
};
