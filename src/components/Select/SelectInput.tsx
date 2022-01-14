import TextField, { TextFieldProps } from "@mui/material/TextField";

const SelectInput = (props: TextFieldProps) => (
  <TextField size="small" select fullWidth {...props}>
    {props.children}
  </TextField>
);

export default SelectInput;
