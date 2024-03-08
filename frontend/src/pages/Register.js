import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  //state
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });

  //handel chagne
  const handelChange = (e) => {
    setInputs((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  //handel submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/user/register", {
        username: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        toast.success("user register succefully");
        navigate("/login");
        console.log("1");
      }
      console.log("2");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={450}
          display={"flex"}
          flexDirection="column"
          alignItems={"center"}
          margin={"auto"}
          marginTop={5}
          boxShadow={"10px 10px 20px #ccc"}
          padding={3}
          borderRadius={5}
        >
          <Typography
            variant="h4"
            padding={3}
            textAlign={"center"}
            textTransform={"uppercase"}
          >
            Register
          </Typography>
          <TextField
            placeholder="name"
            value={inputs.name}
            name="name"
            margin="normal"
            type="text"
            onChange={handelChange}
            required
          />
          <TextField
            placeholder="email"
            value={inputs.email}
            name="email"
            margin="normal"
            type="email"
            onChange={handelChange}
            required
          />
          <TextField
            placeholder="password"
            value={inputs.password}
            name="password"
            margin="normal"
            type="password"
            onChange={handelChange}
            required
          />
          <Button
            type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            onClick={() => navigate("/login")}
          >
            already Register ? plese login
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Register;
