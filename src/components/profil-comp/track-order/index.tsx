import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import "../track-order/track.scss";
import { useQueryHandler } from "../../../hooks/useQuery";
import type { DataType, OrderType } from "../../../@types";
import { useDispatch } from "react-redux";
import { setOpenMoreInfoModal } from "../../../redux/modal-slice";
import Modals from "../../modals";

interface DataType2 {
  key: string;
  id: string;
  Data: string;
  total: string | number;
}


const TrackOrder: React.FC = () => {
      const dispatch = useDispatch()

  const { data }: DataType<OrderType[]> = useQueryHandler<OrderType[]>({
    pathname: "categories",
    url: "api/order/get-order",
  });
  
  const transformedData: DataType2[] =
    data?.map((item) => ({
      key: item._id,
      id: item._id,
      Data: new Date(item.created_at).toLocaleDateString(),
      total: item.extra_shop_info?.total?.toFixed(2) ?? "0.00",
    })) || [];

const columns: TableProps<DataType2>["columns"] = [
  {
    title: "Order Number",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
    width: 300,
    className:"td"
  },
  {
    title: "Date",
    dataIndex: "Data",
    key: "Data",
    width: 200,
    className:"td"
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    width: 200,
    className:"td"
  },
  {
    title: "More",
    key: "more",
    render: (_,record) => <a href="#" onClick={()=> dispatch(setOpenMoreInfoModal(record.id))}>More Info</a>,
    width: 200,
    className:"td"
  },
];
  return (
    <>
    <Table<DataType2>
      className="table"
      columns={columns}
      dataSource={transformedData}
    />
    <Modals/>
    </>
  );
};

export default TrackOrder;
