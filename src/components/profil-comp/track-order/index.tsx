import React from 'react';
import {Table } from 'antd';
import type { TableProps } from 'antd';
import "../track-order/track.scss"
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Order Number',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    width: 300,
  },
  {
    title: 'Data',
    dataIndex: 'age',
    key: 'age',
    width: 200,
  },
  {
    title: 'Total',
    dataIndex: 'address',
    key: 'address',
    width: 200,
  },
  {
    title: 'More',
    key: 'action',
    render:()=> <a href="#">More Info</a>,
    width: 200,
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const TrackOrder: React.FC = () => <Table<DataType> className='table' columns={columns} dataSource={data} />;

export default TrackOrder;