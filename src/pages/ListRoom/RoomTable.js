import { Table, Button,Tag } from "antd";
import {
  TableOutlined,
  UnorderedListOutlined,
  DeleteOutlined,
  FacebookOutlined,
  ExclamationOutlined
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import ListRoom from "../ListRoom";
import DeleteRoom from "./DeleteRoom";
import UpdateRoom from "./UpdateRoom";
import { getListRoom } from "../../services/roomServices";

function RoomTable(props) {
  const [data,setData] = useState([]);
  const [state, setState] = useState(false);
  const [check,setCheck] = useState(true);

  useEffect( () => { 
    const get = async () => {
      const newData = await getListRoom('rooms');
      setData(newData);
    }
    get();
  },[check]);

  const handleDeleteRoom = () => {
    setCheck(!check);
  };
  const handleUpdateRoom = () => {
    setCheck(!check);
  }
  
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "So giuong",
      dataIndex: "soGiuong",
      key: "soGiuong",
    },
    {
      title: "Hanh dong",
      dataIndex: "delete",
      key: "delete",
      render: (_, record) => {
        return (
          <>
            <DeleteRoom record={record} handleDeleteRoom={handleDeleteRoom} />
            <UpdateRoom record={record} handleUpdateRoom={handleUpdateRoom}/>
          </>
        );
      },
    },
    {
      title: 'LoaiPhong',
      dataIndex: 'loaiPhong',
      key: 'loaiPhong',
      render: (_,record) => {
        return (
          <Tag color='blue' icon={<FacebookOutlined />} bordered={false}> Vip </Tag>
        )
      } 
    }
  ];

  const handleClickTable = () => {
    setState(false);
  };

  const handleClickList = () => {
    setState(true);
  };

  return (
    <>
      {state ? (
        <ListRoom />
      ) : (
        <>
          <Button icon={<TableOutlined />} onClick={handleClickTable} />
          <Button icon={<UnorderedListOutlined />} onClick={handleClickList} />
          <Table dataSource={data} columns={columns} rowKey="key" />
        </>
      )}
    </>
  );
}

export default RoomTable;
