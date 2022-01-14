import { Button, Stack, styled, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const FormLayout = styled("form")({
  width: "100%",
});

const CreateAppointment = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormLayout>
      <Stack spacing={2} mt={2}>
        <TextField variant="filled" label="Name" fullWidth />
        <TextField variant="filled" label="Gender" fullWidth />
        <TextField variant="filled" label="Age" fullWidth />
        <TextField variant="filled" fullWidth type="datetime-local" />
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
