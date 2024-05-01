import {
  Layout,
  Select,
  Button,
  InputNumber,
  Table,
  Checkbox,
  Space,
} from "antd";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { EyeOutlined } from "@ant-design/icons";
import "./taxpay.css";

import AuthenTaxPayer from "../../context/afterAuthenTaxPayer";
import { getAllCategoryTax } from "../../services/categoryTax";
import Search from "../../context/search";
import { getAllTaxPayer } from "../../services/taxPayer";
import TaxPayer from "../../context/taxPayer";
const { Content } = Layout;
function TaxPay() {
  const navigate = useNavigate();
  const [allTaxPayer, setAllTaxPayer] = useState([]);
  const [categoryTax, setCategoryTax] = useState([]);
  const { afterAuthenTaxPayer, setAfterAuthenTaxPayer } =
    useContext(AuthenTaxPayer);
  const { taxPayer, setTaxPayer } = useContext(TaxPayer);
  const { search, setSearch } = useContext(Search);
  const taxNumberRef = useRef();
  const CCCDNumberRef = useRef();
  const searchPaymentInformationRef = useRef();

  // get all taxpayer
  useEffect(() => {
    const get = async () => {
      try {
        const newAllTaxPayer = await getAllTaxPayer("api/v1/tax-payer/getAll");
        setAllTaxPayer(newAllTaxPayer);
        console.log(newAllTaxPayer)
      } catch (error) {
        console.error("An error occurred while fetching tax payers:", error);
      }
    };
    get();
  }, []);

  // category_Tax
  useEffect(() => {
    const get = async () => {
      const data = await getAllCategoryTax("api/v1/tax-type/getAll");
      // const data = []
      const newCategoryTax = data.map((item) => ({
        value: item.name,
        label: item.name,
        id: item.id,
      }));
      setCategoryTax(newCategoryTax);
    };
    get();
  }, []);


  const handelTaxCodeSearched = async (e) => {
    if (Array.isArray(allTaxPayer)) {
      setSearch({
        type: "mst",
        data: taxNumberRef.current.value,
      });
      let newTaxPayer = allTaxPayer.find(
        (item) => item["mst"] === taxNumberRef.current.value
      );
      if (newTaxPayer) {
        navigate("/thu-thue/thong-tin-nguoi-dong-thue");
      } else {
        alert(
          "Mã số thuế cần tìm không có trong cơ sở dữ liệu. Vui lòng nhập lại"
        );
      }
    }
  };

  const handleCCCDSearched = async (e) => {
    if (Array.isArray(allTaxPayer)) {
      setSearch({
        type: "cccd",
        data: CCCDNumberRef.current.value,
      });
      let newTaxPayer = allTaxPayer.find(
        (item) => item["cccd"] === CCCDNumberRef.current.value
      );

      if (newTaxPayer) {
        navigate("/thu-thue/thong-tin-nguoi-dong-thue"); // Sử dụng await ở đây
      } else {
        alert(
          "Căn cước công dân cần tìm không có trong cơ sở dữ liệu. Vui lòng nhập lại"
        );
      }
    }
  };

  const handleClickInforDetail = (e) => {
    navigate("/thu-thue/thong-tin-nguoi-dong-thue");
  };
  const handleClickInforTaxPayerSearch = (e) => {
    setAfterAuthenTaxPayer(false);
    navigate("/thu-thue");
  };

  const handelSelectCategoryTax = (value) => {
    setSearch({
      type: value ,
    });
    if (afterAuthenTaxPayer) {
      navigate("/thu-thue/thue-chua-dong",{
        taxPayer: taxPayer
      });
    } else {
      alert(
        "Vui lòng xác thực thông tin người đóng thuế trước khi tra cứu thông tin khoản nộp"
      );
    }
  };

  return (
    <Layout className="layout-taxpay">
      {afterAuthenTaxPayer && (
        <div className="header__infor-taxer">
          <div className="header__infor-title">
            <h3>Thông tin người đóng thuế</h3>
          </div>
          <table className="header__table-payer-infor">
            <tbody>
              <tr>
                <th>Thông Tin</th>
                <th>Chi Tiết</th>
              </tr>
              <tr>
                <td>Mã số thuế</td>
                <td>{taxPayer.mst}</td>
              </tr>
              <tr>
                <td>Căn cước công dân</td>
                <td>{taxPayer.cccd}</td>
              </tr>
              <tr>
                <td>Tên người nộp thuế</td>
                <td>{taxPayer.hoVaTen}</td>
              </tr>
            </tbody>
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
                  ref={taxNumberRef}
                  min={10000000}
                  max={99999999999999}
                />
              </div>

              <div className="header__search">
                <Button type="primary" onClick={handelTaxCodeSearched}>
                  Tra cứu
                </Button>
              </div>
            </div>
            <div className="header__cccd-code">
              <div className="header__cccd-title">
                Tra cứu căn cước công dân:
              </div>
              <div className="header__cccd-number">
                <InputNumber
                  ref={CCCDNumberRef}
                  min={100000000000}
                  max={999999999999}
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
        {afterAuthenTaxPayer && (
          <div className="header__taxpay">
            <div className="header__title">
              <h3>Tra cứu thông tin khoản nộp:</h3>
            </div>
            <div>
              <Select
                mode="multiple"
                allowClear
                ref={searchPaymentInformationRef}
                placeholder="Chọn loại thuế cần thanh toán"
                style={{ width: 250, marginLeft: 20 }}
                onChange={handelSelectCategoryTax}
                options={categoryTax}
                optionRender={(option) => <Space>{option.data.label}</Space>}
              />
            </div>
          </div>
        )}
      </div>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}
export default TaxPay;
