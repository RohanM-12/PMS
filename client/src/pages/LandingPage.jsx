import React from "react";
import { Button, Card } from "antd";
import { RightOutlined } from "@ant-design/icons";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <section
        className="w-full text-center py-20 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
            Affordable Healthcare for Everyone
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Get first-time consultation discounts with new doctors and manage
            your healthcare efficiently with MediConsult.
          </p>
          <Button size="large" type="primary" className="bg-blue-500 shadow-md">
            Book an Appointment <RightOutlined />
          </Button>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Why Choose MediConsult?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card hoverable className="shadow-md" title="24/7 Support">
            <p className="text-gray-600">
              Our platform provides round-the-clock support to assist patients
              and doctors anytime.
            </p>
          </Card>
          <Card hoverable className="shadow-md" title="User-Friendly Interface">
            <p className="text-gray-600">
              Navigate effortlessly with our intuitive and easy-to-use design
              for all age groups.
            </p>
          </Card>
          <Card hoverable className="shadow-md" title="Secure Data">
            <p className="text-gray-600">
              Your personal information is protected with industry-standard
              security measures.
            </p>
          </Card>
          <Card hoverable className="shadow-md" title="Customizable Profiles">
            <p className="text-gray-600">
              Doctors and patients can easily manage and personalize their
              profiles.
            </p>
          </Card>
        </div>
      </section>

      <section className="w-full py-16 bg-blue-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to take charge of your health?
          </h2>
          <p className="text-lg mb-6">
            Join us today and start benefiting from first-time discounts and
            effortless appointment management.
          </p>
          <Button
            size="large"
            type="default"
            className="bg-white text-blue-500"
          >
            Get Started
          </Button>
        </div>
      </section>

      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} MediConsult. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
