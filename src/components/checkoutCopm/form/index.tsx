import type { FormProps } from "antd";
import { Form, Input, Radio, Row, Col } from "antd";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import "../form/form.scss";
import TextArea from "antd/es/input/TextArea";
import { useDispatch } from "react-redux";
import { setOpenOrderModal } from "../../../redux/modal-slice";
import { useOrderMutation } from "../../../hooks/useQuery/useQueryAction";
import { getLocal } from "../../../generic/local";
import { useReduxSelector } from "../../../hooks/useRedux";
import type { MakeOrderType } from "../../../@types";
type FieldType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  country?: string;
  phoneNumber?: string;
  city?: string;
  street?: string;
  state?: string;
  zip?: string;
  apartment?: string;
  payment?: string;
};
const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

const FormComp: React.FC = () => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const { mutate } = useOrderMutation();

  const { data = [] } = useReduxSelector((state) => state.cardSlice || {}); // ✅ to‘g‘ri joy
  const user = getLocal("user") || {};

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    dispatch(setOpenOrderModal(true));
    console.log("✅ Order form values:", values);
    console.log("🛒 Cart items:", data);

    const orderData:MakeOrderType = {
      billing_address: {
        name: user.name,
        surname: user.surname,
      },
      extra_shop_info: {
        total: data.reduce((acc, item) => acc + item.userPrice * item.count, 0),
        method: values.payment as string,
      },
      shop_list: data,
    };

    mutate(orderData);
  };
  return (
    <Form
      name="basic"
      className="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
    >
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item<FieldType>
            label="First name"
            name="firstName"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<FieldType>
            label="Last name"
            name="lastName"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<FieldType>
            label="Country / Region"
            name="country"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<FieldType>
            name="city"
            label="Country / Region"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<FieldType>
            label="Street Address"
            name="street"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<FieldType>
            label="Apartment"
            name="apartment"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<FieldType>
            label="State"
            name="state"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<FieldType>
            label="Zip"
            name="zip"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<FieldType>
            label="Email address"
            name="email"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<FieldType>
            label="Phone number"
            name="phoneNumber"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input addonBefore="+998" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item<FieldType>
            label="Payment Method"
            name="payment"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Radio.Group
              style={style}
              onChange={onChange}
              value={value}
              options={[
                {
                  value: "payme",
                  label: (
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fpayment_collected_methods.png?alt=media&token=c4bfd991-8bd8-4e6b-97dc-83381db193f7"
                      alt="payme"
                      style={{ height: 25 }}
                    />
                  ),
                },
                {
                  value: "Direct bank transfer",
                  label: "Direct bank transfer",
                },
                { value: "Cash on delivery", label: "Cash on delivery" },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <p>Comment</p>
      <TextArea rows={4} />
      <button className="btn">Place order</button>
    </Form>
  );
};

export default FormComp;
