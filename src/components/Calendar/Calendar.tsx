import { useState, useEffect, Fragment } from "react";
import moment from "moment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { buildCalendar } from "../../helper/buildCalendar";
import { Stack, Typography } from "@mui/material";
import {
  StyledContent,
  StyledTableCell,
  FixedDiv,
  HeaderCell,
} from "./layouts";
import Modal from "../Modal";
import { getCurrentSchedules } from "../../helper/getCurrentSchedules";

type Props = {
  year: string;
  month: string;
  schedules: any[];
};

let weekDays = moment.weekdaysShort();

const Calendar = ({ year, month, schedules }: Props) => {
  const [calendar, setCalendar] = useState<any>([]);
  const [value, setValue] = useState({ year: "", month: "" });
  const [open, setOpen] = useState(false);
  const [itemDetails, setItemDetails] = useState({
    name: "",
    gender: "",
    age: "",
  });

  useEffect(() => {
    if (year && month) setValue({ year: year, month: month });
  }, [year, month]);

  useEffect(() => {
    if (value.year && value.month) {
      let _calendar = buildCalendar(value.year, value.month);
      setCalendar(_calendar);
    }
  }, [value]);

  const getCurrentDateSchedules = (date: string) => {
    if (schedules) {
      let currentDateItems = getCurrentSchedules(schedules, date);
      return currentDateItems;
    } else return [];
  };

  const handleScheduleClick = (item: any) => {
    setItemDetails(item);
    setOpen(true);
  };

  return (
    <Fragment>
      <Modal
        open={open}
        header="Appointment Details"
        handleClose={() => setOpen(false)}
      >
        <Stack
          direction="column"
          spacing={1}
          mt={3}
          justifyContent="space-between"
        >
          <Typography>Name: {itemDetails.name}</Typography>
          <Typography>Age: {itemDetails.age}</Typography>
          <Typography>Gender: {itemDetails.gender}</Typography>
        </Stack>
      </Modal>
      <TableContainer sx={{ marginTop: "60px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {weekDays.map((day: string) => (
                <HeaderCell key={day} className="week-day">
                  {day}
                </HeaderCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {calendar?.map((week: any, index: number) => (
              <TableRow key={index}>
                {week?.days?.map((day: any, i: number) => (
                  <StyledTableCell key={i}>
                    <FixedDiv>
                      {day.format("D").toString()}
                      <Stack fontSize={10} spacing={1}>
                        {getCurrentDateSchedules(day)?.map((item) => (
                          <StyledContent
                            key={item}
                            onClick={() => handleScheduleClick(item)}
                          >
                            {item.name} {moment(item.date).format("hh:mma")}
                          </StyledContent>
                        ))}
                      </Stack>
                    </FixedDiv>
                  </StyledTableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default Calendar;
