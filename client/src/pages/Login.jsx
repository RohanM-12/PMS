import React, { useState } from "react";
import { Form, Input, Button, Select, Card } from "antd";

const { Option } = Select;

const LoginPage = () => {
  const onFinish = (values) => {};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-4">
          Login
        </h2>
        <Form layout="vertical" onFinish={onFinish} className="space-y-4">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500"
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <Button type="link" className="text-blue-500">
            Sign Up
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
