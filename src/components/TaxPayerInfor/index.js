import { Button } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import "./tax_payer_infor.css";
import '../../action/taxpayAction'
import AuthenTaxPayer from "../../context/afterAuthenTaxPayer";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function TaxPayerInfor() {

  const navigate = useNavigate();
  const { afterAuthenTaxPayer, setAfterAuthenTaxPayer } = useContext(AuthenTaxPayer);

  const handleClickInforAuthen = () => {
    setAfterAuthenTaxPayer(true)
    navigate('/tax-pay')
  }

  return (
    <>
      <div className="content">
        <div className="content__title">
          <h3>Thông tin người đóng thuế</h3>
        </div>
        <div className="content__tax-payer-infor">
          <table className="content__table">
            <tr>
              <th>Thông Tin</th>
              <th>Chi Tiết</th>
            </tr>
            <tr>
              <td>Mã số thuế</td>
              <td>123456789</td>
            </tr>
            <tr>
              <td>Căn cước công dân</td>
              <td>987654321</td>
            </tr>
            <tr>
              <td>Tên người nộp thuế</td>
              <td>Nguyễn Văn A</td>
            </tr>
            <tr>
              <td>Ngày sinh</td>
              <td>01/01/1980</td>
            </tr>
            <tr>
              <td>Giới tính</td>
              <td>Nam</td>
            </tr>
            <tr>
              <td>Thành phố</td>
              <td>Hà Nội</td>
            </tr>
            <tr>
              <td>Quận/huyện</td>
              <td>Ba Đình</td>
            </tr>
            <tr>
              <td>Điện thoại</td>
              <td>0909123456</td>
            </tr>
          </table>
        </div>
        {/* ----------------------------- */}
        <div className="content__infor-authen">
          <Button type="primary" onClick={handleClickInforAuthen}>
            Xác nhận
          </Button>
        </div>
      </div>
    </>
  );
}

export default TaxPayerInfor;
