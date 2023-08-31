import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccountMenu from "../components/AccountMenu";
import BasicForm from "../components/BasicForm";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [openForm, setOpenForm] = React.useState(false);
  const handleOnClick = (page) => {
    console.log("open");
    if (!openForm) {
      setOpenForm(true);
    } else {
      setOpenForm(false);
    }
  };
  return (
    <Container maxWidth="sm">
      <AccountMenu onClick={handleOnClick} />
      {openForm && <BasicForm />}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Skills test
        </Typography>
      </Box>
      <Outlet />
    </Container>
  );
};

export default Home;
