import {
  Space,
  Input,
  Checkbox,
  DatePicker,
  Radio,
  Select,
  Row,
  Col,
  Switch,
  Button,
} from "antd";
import {postBooking} from '../../services/bookingService'
import { useState } from "react";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;
const options = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },
];
function BookRoom() {
  const [data, setData] = useState({});
  const handleInput = (e) => {
    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(newData);
  };
  const handleClick = (e) => {
    const newData = {
      ...data,
      services: e,
    };
    setData(newData);
  };
  const handleOk = (e) => {
    console.log(e);
  };
  // const handleChange = (dates, dateStrings) => {
  //   // console.log(dates,dateStrings);
  // };
  const handleRadio = (e) => {
    const newData = {
      ...data,
      radio: e.target.value,
    };
    setData(newData);
  };
  // const handleSwitch = (e) => {
  //   console.log(e)
  // }
  const handleBooing = () => {
    postBooking(data,'booking');
  }
  console.log(data);
  return (
    <>
      <Row gutter={[20,20]} style={{margin: "20px 20px"}}>
        <Col span={12}>
          <Input
            showCount={true}
            name="hoten"
            placeholder="Nhap ho ten"
            onChange={handleInput}
          />
        </Col>
        <Col span={12}>
          <Input name="soDienThoai" placeholder="Nhap so dien thoai" />
        </Col>
      </Row>
      <Row style={{margin: "20px 30px"}}>
        <Col span={24}>
          <Checkbox.Group onChange={handleClick}>
            <Space size={"small"} direction="vertical">
              <Checkbox value={"dat phong"}>Dat phong</Checkbox>
              <Checkbox value={"dat xe"}>Dat xe</Checkbox>
              <Checkbox value={"dat mon"}>Dat mon</Checkbox>
              <Checkbox value={"dat ban"}>Dat ban</Checkbox>
            </Space>
          </Checkbox.Group>
        </Col>
      </Row>
      
      <Row style={{margin: "20px 30px"}}>
        <Col span={24}>
            <DatePicker
            defaultValue={dayjs("12-06-2023", "DD-MM-YYYY")}
            showTime={{ format: "HH:mm:ss" }}
            onOk={handleOk}
          />
        </Col>
      </Row>
      <Row style={{margin: "20px 30px"}}>
        <Col span={24}>
        <Radio.Group mode='multiple' onChange={handleRadio} defaultValue={"A"}>
        <Radio defaultChecked value={"Dặt phòng"}>
          Đặt phòng
        </Radio>
        <Radio defaultChecked name="radio-2" value={"Đặt xe"}>
          Đặt xe
        </Radio>
        <Radio name="radio-3" value={"Đặt món"}>
          Đặt món
        </Radio>
      </Radio.Group>
        </Col>
      </Row>
      
      <Row style={{margin: "20px 30px"}}>
        <Col span={24}>
            <Select
            showSearch
            filterOption={(input, option) => option.value.toString() === input}
            mode="tags"
            style={{ width: "300px" }}
            placeholder={"chon"}
            dropdownRender={(menu) => {
              return (
                <>
                  {menu}
                  <Input
                    placeholder="nhap ten"
                    style={{ padding: "8px", margin: "8px" }}
                  />
                </>
              );
            }}
            options={options}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <Switch checkedChildren={"Bật"} unCheckedChildren={"Tắt"}  checked={false} onClick={handleSwitch}/> */}
          <Button onClick={handleBooing}>Đặt phòng</Button>
        </Col>
      </Row>
    </>
  );
}
export default BookRoom;
