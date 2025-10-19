import React from "react";
import { Layout, Menu, Avatar, Button, Form, Input, DatePicker } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  FileTextOutlined,
  UploadOutlined,
  HeartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

// Single-file React component using Ant Design components + Tailwind CSS classes
// File name: Profile.jsx

export default function Profile() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Saved values:", values);
    // replace with API call / state update as needed
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-2">Personal Information</h2>
        <p className="text-sm text-gray-500 mb-6">
          Your account details and preferences
        </p>

        <div className="flex items-start gap-6 mb-6">
          <Avatar
            size={64}
            icon={<UserOutlined />}
            className="bg-teal-50 text-teal-600"
          />
          <div className="flex items-center gap-4">
            <Button type="default">Change Avatar</Button>
          </div>
        </div>

        <Form
          form={form}
          layout="vertical"
          initialValues={{ fullName: "Huzaima", email: "huzaima@gmail.com" }}
          onFinish={onFinish}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input placeholder="Full name" size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input placeholder="email@example.com" size="large" />
          </Form.Item>

          <Form.Item name="phone" label="Phone Number">
            <Input placeholder="Add phone number" size="large" />
          </Form.Item>

          <Form.Item name="dob" label="Date of Birth">
            <DatePicker className="w-full" size="large" />
          </Form.Item>

          <div className="flex justify-end">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="px-8 rounded-md"
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
