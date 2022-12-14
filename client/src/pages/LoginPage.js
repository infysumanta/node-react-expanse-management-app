import React, { useEffect, useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      message.success("Loggedin Successfully");
      localStorage.setItem("user", JSON.stringify(data.user));
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Invalid Details");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div className="register-page">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={onSubmitHandler}>
          <h1>Login to your Account</h1>
          <Form.Item label="Email" name="email">
            <Input autoComplete="off" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" autoComplete="off" />
          </Form.Item>
          <div className="d-grid gap-2">
            <button className="btn btn-primary btn-block">Register</button>
            <Link to="/register">Already Register? Click Here to login</Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
