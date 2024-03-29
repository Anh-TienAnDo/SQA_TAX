import { Layout, Select, Button, InputNumber, Table, Checkbox } from "antd";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { EyeOutlined } from "@ant-design/icons";
import "./taxpay.css";

import AuthenTaxPayer from "../../context/afterAuthenTaxPayer";
const { Content } = Layout;
function TaxPay() {
  const navigate = useNavigate();
  // const { searchTaxPayer,setSearchTaxPayer} = useContext(TaxPayer);
  const { afterAuthenTaxPayer, setAfterAuthenTaxPayer } =
    useContext(AuthenTaxPayer);
  // danh sách thuế cần đóng
  // useEffect(() => {
  //   const get = async () => {
  //     const data = await getListPayTax("maSoThue");
  //     setlistPayTax(data)
  //     settaxPaySearch(true)
  //   };
  //   get();
  // }, [taxPaySearch]);

  // useEffect(() => {

  // }, [taxPaySearch]);

  const handleUnpaidTaxSearched = (e) => {
    navigate('/tax-pay/list-unpaid-tax')
  };
  
  const handelTaxCodeSearched = (e) => {
    navigate("/tax-pay/tax-payer-infor");
  };

  const handleCCCDSearched = (e) => {
    navigate("/tax-pay/tax-payer-infor");
  };

  const handleClickInforDetail = (e) => {
    navigate("/tax-pay/tax-payer-infor");
  };
  const handleClickInforTaxPayerSearch = (e) => {
    setAfterAuthenTaxPayer(false)
    navigate("/tax-pay")
  };
  return (
    <Layout className="layout-taxpay">
      {afterAuthenTaxPayer && (
        <div className="header__infor-taxer">
          <table className="header__table-payer-infor">
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
          </table>
          <div className="header__infor-detailAndSearch">
            <Button
              style={{ marginTop: 20 }}
              type="primary"
              onClick={handleClickInforDetail}
            >
              Xem chi tiết thông tin người đóng thuế
            </Button>

            <Button
              style={{ marginTop: 20, marginLeft: 30 }}
              type="primary"
              onClick={handleClickInforTaxPayerSearch}
            >
              Tra cứu thông tin người đóng thuế
            </Button>
          </div>
        </div>
      )}

      <div className="layout-taxpay__header">
        {!afterAuthenTaxPayer && (
        <div className="header__tax-payer-search">
          <div className="header__tax-code">
            <div className="header__tax-title">Tra cứu mã số thuế:</div>
            <div className="header__tax-number">
              <InputNumber
                min={10000000000}
                max={10000000000}
                defaultValue={3}
              />
            </div>

            <div className="header__search">
              <Button type="primary" onClick={handelTaxCodeSearched}>
                Tra cứu
              </Button>
            </div>
          </div>
          <div className="header__cccd-code">
            <div className="header__cccd-title">Tra cứu căn cước công dân:</div>
            <div className="header__cccd-number">
              <InputNumber
                min={10000000000}
                max={9999999999}
                defaultValue={3}
              />
            </div>
            <div className="header__search">
              <Button type="primary" onClick={handleCCCDSearched}>
                Tra cứu
              </Button>
            </div>
          </div>
        </div>
        )}

        <div className="header__taxpay">
          <div className="header__title">Tra cứu thông tin khoản nộp:</div>
          <div>
            <Select
              placeholder="Chọn loại thuế cần thanh toán"
              style={{ width: 250, marginLeft: 20 }}
              // onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
            <div className="header__search">
              <Button type="primary" onClick={handleUnpaidTaxSearched}>
                Tra cứu
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}
export default TaxPay;
