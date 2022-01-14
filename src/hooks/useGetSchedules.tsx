import React, { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import moment from "moment";

const useGetSchedules = (month: string, year: string) => {
  const schedules = useAppSelector((state) => state.appointments);
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    if (month && year && schedules) {
      const filteredItem = schedules.filter(
        (item) =>
          moment(item.date).format("YYYY") === String(year) &&
          moment(item.date).format("M") === String(month)
      );
      setItems(filteredItem);
    }
  }, [month, year, schedules]);

  return React.useMemo(
    () => ({
      schedules,
      currentMonthSchedules: items,
    }),
    [schedules, items]
  );
};

export default useGetSchedules;
