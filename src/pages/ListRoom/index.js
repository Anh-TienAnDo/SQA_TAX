import { Card, Row, Col, Badge, Table, Button, Spin } from "antd";
import { TableOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getListRoom } from "../../services/roomServices";
import RoomTable from "./RoomTable";

function ListRoom() {
  const [data, setData] = useState([]);
  const [state, setState] = useState(true);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(() => {
    const get = async () => {
      const newData = await getListRoom("rooms");
      setData(newData);
      setIsLoading(true);
    };
    get();
  }, []);

  const handleClickTable = () => {
    setState(false);
  };

  const handleClickList = () => {
    setState(true);
  };

  return (
    <>
      {isLoading ? (
        state ? (
          <Row gutter={[20, 20]} style={{ margin: "15px 20px" }}>
            <Col span={24}>
              <Button icon={<TableOutlined />} onClick={handleClickTable} />
              <Button
                icon={<UnorderedListOutlined />}
                onClick={handleClickList}
              />
            </Col>
            {data.map((room, index) => (
              <Col span={8} key={index}>
                <Badge.Ribbon text="Thuong">
                  <Card title="Room" bordered={false}>
                    <p>Id: {room.id}</p>
                    <p>Ten phong: {room.name}</p>
                    <p>So Giuong: {room.soGiuong}</p>
                    <p>So luong nguoi: {room.quantity}</p>
                  </Card>
                </Badge.Ribbon>
              </Col>
            ))}
          </Row>
        ) : (
          <RoomTable data={data} />
        )
      ) : (
        <Spin tip="Loading">
          <p>ok</p>
        </Spin>
      )}
    </>
  );
}

export default ListRoom;
