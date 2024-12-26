import React, { useState } from "react";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          <h1 className="text-2xl font-bold text-blue-600">MediConsult</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to={"/"}>
            <Button type="link" className="text-gray-600 hover:text-blue-500">
              Home
            </Button>
          </Link>

          <Button type="link" className="text-gray-600 hover:text-blue-500">
            Features
          </Button>
          <Button type="link" className="text-gray-600 hover:text-blue-500">
            About
          </Button>
          <div className="space-x-4">
            <Link to={"/login"}>
              <Button type="primary" className="bg-blue-500">
                Login
              </Button>
            </Link>
            <Link to={"/signup"}>
              <Button type="default" className="border-blue-500 text-blue-500">
                Sign Up
              </Button>
            </Link>

            <Button shape="circle" icon={<UserOutlined />} />
          </div>
        </nav>

        <MenuOutlined
          className="text-2xl text-gray-600 md:hidden cursor-pointer"
          onClick={toggleDrawer}
        />
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        open={isDrawerOpen}
        className="md:hidden"
      >
        <Menu mode="vertical">
          <Menu.Item key="1">
            <Link to={"/"}>
              <Button type="link" className="text-gray-600 hover:text-blue-500">
                Home
              </Button>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Button type="link" className="text-gray-600">
              Features
            </Button>
          </Menu.Item>
          <Menu.Item key="3">
            <Button type="link" className="text-gray-600">
              About
            </Button>
          </Menu.Item>
          <Menu.Item type="link" key="4" className="space-y-2">
            Login
          </Menu.Item>
          <Menu.Item type="link" key="5" className="space-y-2">
            Sing-Up
          </Menu.Item>
        </Menu>
      </Drawer>
    </header>
  );
};

export default Header;
