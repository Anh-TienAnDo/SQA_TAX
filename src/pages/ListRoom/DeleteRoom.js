import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm,Tooltip,message } from "antd";
import { deleteRoom } from "../../services/roomServices";
function DeleteRoom(props) {
  const { record, handleDeleteRoom } = props;
  const handleDelete = async () => {
    const res = await deleteRoom(record.id, "rooms");
    handleDeleteRoom();
  };

  return (
    <>
        <Button icon={<DeleteOutlined />} danger onClick={handleDelete} />
    </>
  );
}

export default DeleteRoom;
