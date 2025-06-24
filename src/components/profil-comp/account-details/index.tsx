import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, Upload, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

type FieldType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  userName?: string;
  image?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const AccountDetails: React.FC = () => (
  <Form
    name="basic"
    className="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    layout="vertical"
  >
    <Row gutter={24}>
      <Col span={12}>
        <Form.Item<FieldType>
          label="First name"
          name="firstName"
          
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input defaultValue="Saidamirxon" style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item<FieldType>
          label="Last name"
          name="lastName"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input defaultValue="Saidamirxon" style={{ width: '100%' }} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input defaultValue="Saidamirxon" style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item<FieldType>
          name="phoneNumber"
          label="Phone number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input defaultValue="Saidamirxon" addonBefore="+998" style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item<FieldType>
          label="Username"
          name="userName"
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <Input defaultValue="Saidamirxon" style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item<FieldType>
          name="image"
          label="Image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
      </Col>
    </Row>
    <button className='btn'>Save changes</button>
  </Form>
);

export default AccountDetails;