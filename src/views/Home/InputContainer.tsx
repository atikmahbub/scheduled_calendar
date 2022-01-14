import React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import moment from "moment";
import MenuItem from "@mui/material/MenuItem";
import SelectInput from "../../components/Select";

const years = ["2019", "2020", "2021", "2022", "2023"];

type ArgProps = {
  year: string;
  month: string;
};

type Props = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: ArgProps;
  handleCreateAppointment: () => void;
};

const InputContainer = ({
  handleInputChange,
  state,
  handleCreateAppointment,
}: Props) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mt={7}
    >
      <Stack direction="row" spacing={2} sx={{ width: "50%" }}>
        <SelectInput
          label="Month"
          name="month"
          value={state.month}
          onChange={handleInputChange}
        >
          {moment.months().map((item: string, i: number) => (
            <MenuItem key={item} value={i + 1}>
              {item}
            </MenuItem>
          ))}
        </SelectInput>
        <SelectInput
          label="Year"
          name="year"
          value={state.year}
          onChange={handleInputChange}
        >
          {years?.map((item: string, i: number) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </SelectInput>
      </Stack>
      <Button
        size="small"
        variant="contained"
        color="success"
        onClick={handleCreateAppointment}
      >
        Create Appointment
      </Button>
    </Stack>
  );
};

export default InputContainer;
