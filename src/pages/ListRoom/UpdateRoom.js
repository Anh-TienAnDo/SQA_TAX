import {Modal,Form,InputNumber,Input,Button,notification} from 'antd';
import{useState} from 'react';
import { updateRoom } from '../../services/roomServices';

const style = {
  margin: "20px 20px",
};
function UpdateRoom(props) {
  const {record, handleUpdateRoom} = props;
  const [isOpen,setIsModalOpen] = useState(false);

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.success({
      message: `Cap nhat thanh cong`,
      description: 'thanh cong',
      placement,
      duration: 2,
      role: 'alert',
      rtl: true,
    });
  };

  const handleSubmit = async (e) => {
    const res = await updateRoom(record.id,e);
    if(res) {
      handleUpdateRoom();
      setIsModalOpen(!isOpen);
      openNotification('topRight')
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  console.log(record)
  return (
    <>
      {contextHolder}
      <Button size='small' type="primary" onClick={showModal}>
          Open Modal
      </Button>
      <Modal title='Cap nhat' open={isOpen} footer={null} onCancel={handleCancel}>
        <Form layout="Success" onFinish={handleSubmit} requiredMark={"optional"}
          labelCol={{
            span: 3
            // sm: { span: 3, offset: 12 },
          }}
          initialValues={record}
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
      </Modal>
    </>
  )
}
export default UpdateRoom;