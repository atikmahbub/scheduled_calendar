import React from "react";
import { useAppSelector } from "../app/hooks";

const useGetSchedules = () => {
  const schedules = useAppSelector((state) => state.appointments);

  return React.useMemo(
    () => ({
      schedules,
    }),
    [schedules]
  );
};

export default useGetSchedules;
