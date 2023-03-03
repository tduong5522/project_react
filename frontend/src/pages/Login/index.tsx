import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const { signIn } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");

  const onFinish = async (values: any) => {
    signIn(values.username, values.password).then((rs) => {
      if ("status" in rs.data && rs.data.status === "fail") {
        setErrorMsg("Username or password wrong!");
      } else if (rs.data.status === "success") {
        history.push("/");
        setErrorMsg("");
      } else {
        setErrorMsg("");
      }
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, margin: "50px auto" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          { required: true, message: "Please input your username!" },
          {
            pattern: /^\w+$/g,
            message: "Username have no any special characters",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!" },
          { min: 8, message: "Password at least 8 charecters." },
          // {
          //   pattern:
          //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/g,
          //   message:
          //     "Password has at least one uppercase letter, one lowercase letter, one number and one special character",
          // },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      {errorMsg && (
        <Typography.Text
          type="danger"
          style={{ display: "block", textAlign: "center" }}
        >
          {errorMsg}
        </Typography.Text>
      )}
    </Form>
  );
};

export default Login;
