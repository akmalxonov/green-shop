import React from "react";
import type { FormProps } from "antd";
import { Form, Input, Row, Col } from "antd";
import { useAddressMutation } from "../../../hooks/useQuery/useQueryAction";
import { getLocal } from "../../../generic/local";

interface AddressFormValues {
  name:string,
  surname:string,
  country:string,
  town:string,
  street_address:string,
  additional_street_address:string,
  state:string,
  zip:string
}

const onFinishFailed: FormProps<AddressFormValues>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Addres: React.FC = () => {
  const { mutate } = useAddressMutation();
  const onFinish: FormProps<AddressFormValues>["onFinish"] = (values) => {
    console.log("Success:", values);
    const user = getLocal("user") || {};
    const transformedData = {
      _id:user._id,
      name: user.name,
      surname: user.surname,
      town: values.town,
      street_address: values.street_address,
      email: values.state,
      phone_number: values.zip,
      country:values.country,
      state:values.state,
      zip:values.zip
    };

    mutate(transformedData);
  };

  return (
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
          <Form.Item<AddressFormValues>
            label="Country / Region"
            name="country"
            rules={[{ required: true, message: "Please enter first name" }]}
          >
            <Input placeholder="" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<AddressFormValues>
            label="Town city"
            name="town"
            rules={[{ required: true, message: "Please enter last name" }]}
          >
            <Input placeholder="" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<AddressFormValues>
            label="State address"
            name="street_address"
            rules={[{ required: true, message: "Please enter town or city" }]}
          >
            <Input placeholder="" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<AddressFormValues>
            label="Extra address"
            name="additional_street_address"
            rules={[{ required: true, message: "Please enter street address" }]}
          >
            <Input placeholder="" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<AddressFormValues>
            label="State"
            name="state"
            rules={[{ required: true, message: "Please enter email" }]}
          >
            <Input placeholder="" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<AddressFormValues>
            label="Zip"
            name="zip"
            rules={[{ required: true, message: "Please enter phone number" }]}
          >
            <Input placeholder="" />
          </Form.Item>
        </Col>
      </Row>
      <button className="btn">Save changes</button>
    </Form>
  );
};

export default Addres;
