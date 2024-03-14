import { Form, Input, Button, InputNumber, Switch,Card,Avatar,Skeleton } from "antd";
import {postRoom} from '../../services/roomServices';
const style = {
  margin: "20px 20px",
};
function CreateRoom() {
  const handleSubmit = async (e) => {
    const newRoom = e;
    const res = await postRoom(newRoom, 'rooms');
    console.log(res)
  };
  return (
    <>
      <Form layout="Success" onFinish={handleSubmit} requiredMark={"optional"}
        labelCol={{
          span: 3
          // sm: { span: 3, offset: 12 },
        }}
       >
        <Form.Item
          label={"Ten phong"}
          name={"name"}
          style={style}
          hasFeedback
          required
        >
          <Input placeholder="I'm the content" id="success" />
        </Form.Item>

        <Form.Item label="So giuong" name="soGiuong">
          <Input placeholder="So luong giuong" id="soLuongGiuong" />
        </Form.Item>

        <Form.Item label={"So luong nguoi"} name={"quantity"} style={style}>
          <InputNumber min={1} max={10} />
        </Form.Item>
     
        <Form.Item style={style}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </>
  );
}
export default CreateRoom;
