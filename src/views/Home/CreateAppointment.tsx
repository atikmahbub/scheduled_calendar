import { Button, Stack, styled, TextField } from "@mui/material";
import SelectInput from "../../components/Select";
import { useForm } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";

const FormLayout = styled("form")({
  width: "100%",
});

const genderList = ["Male", "Female", "Others"];

type AppointmentProps = {
  onCreateAppointment: (data: any) => void;
};

const CreateAppointment = ({ onCreateAppointment }: AppointmentProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormLayout onSubmit={handleSubmit(onCreateAppointment)}>
      <Stack spacing={4} mt={2}>
        <TextField
          variant="filled"
          label="Name"
          size="small"
          fullWidth
          {...register("name", { required: true })}
          error={errors.name && errors.name}
        />
        <SelectInput
          variant="filled"
          label="Gender"
          {...register("gender", { required: false })}
        >
          {genderList.map((item: string, i: number) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </SelectInput>
        <TextField
          variant="filled"
          label="Age"
          size="small"
          fullWidth
          type="number"
          {...register("age", { required: false })}
        />
        <TextField
          variant="filled"
          fullWidth
          size="small"
          type="datetime-local"
          {...register("date", { required: true })}
          error={errors.date && errors.date}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        mt={3}
        spacing={2}
      >
        <Button size="small" variant="outlined" color="secondary">
          Close
        </Button>
        <Button size="small" variant="contained" type="submit">
          Create
        </Button>
      </Stack>
    </FormLayout>
  );
};

export default CreateAppointment;
