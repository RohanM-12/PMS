import React, { useState } from "react";
import { Form, Input, Button, Select, Card } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { PercentageOutlined } from "@ant-design/icons";
const { Option } = Select;

const SignupPage = () => {
  const [role, setRole] = useState(0); // Default role

  const handleRoleChange = (value) => {
    setRole(value);
  };

  const onFinish = async (values) => {
    try {
      console.log("Signup Data:", values);
      const result = await axios.post("/auth/signup", values);
      console.log(result);
      toast.success("Registered Successfully");
    } catch (error) {
      console.log(error);
      toast.error("error while registration");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-4">
          Signup
        </h2>
        <Form layout="vertical" onFinish={onFinish} className="space-y-4">
          <Form.Item
            label="Role"
            name="role"
            initialValue={"Patient"}
            rules={[{ required: true, message: "Please select your role!" }]}
          >
            <Select
              onChange={handleRoleChange}
              className="w-full"
              placeholder="Select Role"
            >
              <Option value={1}>Doctor</Option>
              <Option value={0}>Patient</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

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

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number!" },
            ]}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please enter your address!" }]}
          >
            <Input.TextArea placeholder="Enter your address" />
          </Form.Item>

          {role === 1 && (
            <>
              <Form.Item
                label="Qualification"
                name="qualification"
                rules={[
                  {
                    required: true,
                    message: "Please enter your qualification!",
                  },
                ]}
              >
                <Input placeholder="Enter your qualification" />
              </Form.Item>
              <Form.Item
                label="Consultaion charges"
                name="charges"
                rules={[
                  {
                    required: true,
                    message: "Please enter your charges!",
                  },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Enter your charges"
                  addonAfter={" ₹"}
                />
              </Form.Item>
              <Form.Item
                label="Consultaion Discount"
                name="discount"
                rules={[
                  {
                    required: true,
                    message: "Please enter first consultation discount!",
                  },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Enter first consultation discount"
                  addonAfter={<PercentageOutlined />}
                />
              </Form.Item>
              <Form.Item
                label="Speciality"
                name="speciality"
                rules={[
                  { required: true, message: "Please enter your speciality!" },
                ]}
              >
                <Input placeholder="Enter your speciality" />
              </Form.Item>
            </>
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500"
            >
              Signup
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-4 text-gray-600">
          Already have an account?
          <Button type="link" className="text-blue-500">
            Login
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SignupPage;
