import React from 'react';
import type { FormProps } from 'antd';
import { Form, Input, Row, Col } from 'antd';

type FieldType = {
  Country?: string;
  TownCity?: string;
  StateAddress?: string;
  ExtraAddress?: string;
  State?: string;
  Zip?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const Addres: React.FC = () => (
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
          label="Country / Region"
          name="Country"
          
          rules={[{ required: true, message: 'Please enter country...' }]}
        >
          <Input placeholder='Type enter country...' style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item<FieldType>
          label="Town city"
          name="TownCity"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Type enter town city..." style={{ width: '100%' }} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item<FieldType>
          label="State address"
          name="StateAddress"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Type enter street address..." style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item<FieldType>
          label="Extra address"
          name="ExtraAddress"
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <Input placeholder="Type enter extra address..." style={{ width: '100%' }} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item<FieldType>
          label="State"
          name="State"
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <Input placeholder="Type enter state..." style={{ width: '100%' }} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item<FieldType>
          label="Zip"
          name="Zip"
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <Input placeholder="Type enter extra zip..." style={{ width: '100%' }} />
        </Form.Item>
      </Col>
    </Row>
    <button className='btn'>Save changes</button>
  </Form>
);

export default Addres;