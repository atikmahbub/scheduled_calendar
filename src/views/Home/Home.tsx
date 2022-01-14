import React, { Fragment, useEffect, useState } from "react";
import Calendar from "../../components/Calendar";
import InputContainer from "./InputContainer";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Modal from "../../components/Modal";
import CreateAppointment from "./CreateAppointment";
import { addAppointment } from "../../features/appointmentSlice";
import { useAppDispatch } from "../../app/hooks";
import Header from "./Header";
import useGetSchedules from "../../hooks/useGetSchedules";

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    month: moment().format("M"),
    year: moment().format("YYYY"),
  });
  const { schedules } = useGetSchedules(state.month, state.year);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateAppointment = () => setOpen(true);

  useEffect(() => {
    if (state.month && state.year)
      navigate({
        pathname: "/",
        search: `month=${state.month}&year=${state.year}`,
      });
  }, [state, navigate]);

  const onCreateAppointment = (data: any) => {
    if (data) dispatch(addAppointment(data));
    setOpen(false);
  };

  return (
    <Fragment>
      <Modal
        open={open}
        header="Create Appointment"
        handleClose={() => setOpen(false)}
      >
        <CreateAppointment
          onCreateAppointment={onCreateAppointment}
          handleClose={() => setOpen(false)}
        />
      </Modal>
      <Header />
      <InputContainer
        state={state}
        handleInputChange={handleInputChange}
        handleCreateAppointment={handleCreateAppointment}
      />
      <Calendar year={state.year} month={state.month} schedules={schedules} />
    </Fragment>
  );
};

export default Home;
