import React, { Fragment, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Calendar from "../../components/Calendar";
import InputContainer from "./InputContainer";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Modal from "../../components/Modal";
import CreateAppointment from "./CreateAppointment";

const Home = () => {
  const [state, setState] = useState({
    month: moment().format("M"),
    year: moment().format("YYYY"),
  });
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateAppointment = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (state.month && state.year)
      navigate({
        pathname: "/",
        search: `month=${state.month}&year=${state.year}`,
      });
  }, [state, navigate]);

  return (
    <Fragment>
      <Modal
        open={open}
        header="Create Appointment"
        handleClose={() => setOpen(false)}
      >
        <CreateAppointment />
      </Modal>
      <Typography variant="h2" align="center">
        Doctor Appointment
      </Typography>
      <InputContainer
        state={state}
        handleInputChange={handleInputChange}
        handleCreateAppointment={handleCreateAppointment}
      />
      <Calendar year={state.year} month={state.month} />
    </Fragment>
  );
};

export default Home;
