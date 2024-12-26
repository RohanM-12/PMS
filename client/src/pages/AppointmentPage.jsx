import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  DatePicker,
  Card,
  Typography,
  Row,
  Col,
} from "antd";
import "antd/dist/reset.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
const { Option } = Select;
const { Title, Text } = Typography;

const AppointmentPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [charges, setCharges] = useState(0);
  const [discount, setDiscount] = useState(20); // 20% discount for first consultation
  const [finalAmount, setFinalAmount] = useState(0);

  async function fetchData() {
    try {
      const { data } = await axios.get("/user/doctors");
      console.log(data);
      setDoctors(data?.doctors);
    } catch (error) {
      console.log(error, "error in fetching data");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleDoctorSelect = (value) => {
    const doctor = doctors.find((doc) => doc._id === value);
    setSelectedDoctor(doctor);
    if (doctor?.charges) {
      setCharges(doctor.charges);
      const discountedAmount =
        doctor.charges - doctor.charges * (discount / 100);
      setFinalAmount(discountedAmount);
    }
  };

  const onFinish = (values) => {
    console.log("Appointment Details: ", values);
    navigate(
      "/booked/?paymentNumber=DKEJ-7887-DJR875&bookingDate=2024-03-20&doctorName=Dr.Jones"
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Card
        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center mb-8 shadow-lg"
        bordered={false}
      >
        <Title level={3} className="text-white font-bold">
          Get Your First Consultation at a Discount!
        </Title>
        <Text className="text-white font-bold animate-pulse text-xl">
          Enjoy exclusive discounts on your first consultation with any doctor.
          Sign up and book your appointment now!
        </Text>
      </Card>

      <Card className="mb-6 shadow-md">
        <Title level={4} className="text-gray-700">
          Select a Doctor
        </Title>
        <Select
          className="w-full"
          placeholder="Choose a doctor by speciality"
          onChange={handleDoctorSelect}
        >
          {doctors.map((doctor) => (
            <Option key={doctor._id} value={doctor._id}>
              {doctor.name} - {doctor.speciality} (Charges: {doctor.charges})
            </Option>
          ))}
        </Select>
      </Card>

      {selectedDoctor && (
        <Card className="shadow-md">
          <Title level={4} className="text-gray-700">
            Book Appointment with {selectedDoctor.name}
          </Title>
          <Form layout="vertical" onFinish={onFinish} className="space-y-4">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input placeholder="Your Full Name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Enter a valid email" },
                  ]}
                >
                  <Input placeholder="Your Email Address" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Phone Number"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <Input placeholder="Your Phone Number" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Preferred Appointment Date"
                  name="appointmentDate"
                  rules={[{ required: true, message: "Please select a date" }]}
                >
                  <DatePicker className="w-full" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input.TextArea placeholder="Your Address" rows={3} />
            </Form.Item>

            <Card className="mb-4 shadow-sm">
              <Title level={5} className="text-gray-700">
                Bill Summary
              </Title>
              <Row>
                <Col span={12}>Doctor's Charges:</Col>
                <Col span={12} className="text-right">
                  <Text>{charges} INR</Text>
                </Col>
              </Row>
              <Row>
                <Col span={12}>Discount (First Consultation):</Col>
                <Col span={12} className="text-right">
                  <Text>- {charges * (discount / 100)} INR</Text>
                </Col>
              </Row>
              <Row className="font-bold">
                <Col span={12}>Total Payable Amount:</Col>
                <Col span={12} className="text-right">
                  <Text>{finalAmount} INR</Text>
                </Col>
              </Row>
            </Card>

            <Button type="primary" htmlType="submit" className="w-full">
              Book Appointment
            </Button>
          </Form>
        </Card>
      )}
    </div>
  );
};

export default AppointmentPage;
