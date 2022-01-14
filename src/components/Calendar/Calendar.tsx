import { useState, useEffect } from "react";
import moment from "moment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/system";
import { buildCalendar } from "../../helper/buildCalendar";

const StyledTableCell = styled(TableCell)({
  height: 150,
  fontSize: 40,
  padding: 10,
  color: "gray",
  border: "1px solid #e6e8eb",
});

const HeaderCell = styled(TableCell)({
  fontSize: 24,
  fontWeight: 500,
  color: "#333",
});

type Props = {
  year: string;
  month: string;
};
let weekDays = moment.weekdaysShort();

const Calendar = ({ year, month }: Props) => {
  const [calendar, setCalendar] = useState<any>([]);
  const [value, setValue] = useState({ year: "", month: "" });

  useEffect(() => {
    if (year && month) setValue({ year: year, month: month });
  }, [year, month]);

  useEffect(() => {
    if (value.year && value.month) {
      let _calendar = buildCalendar(value.year, value.month);
      setCalendar(_calendar);
    }
  }, [value]);

  return (
    <div style={{ marginTop: "50px" }}>
      <TableContainer>
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
            {calendar?.map((week: any) => (
              <TableRow>
                {week?.days?.map((day: any) => (
                  <StyledTableCell>
                    {day.format("D").toString()}
                  </StyledTableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Calendar;
