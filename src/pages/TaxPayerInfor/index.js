import { Button } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import "./tax_payer_infor.css";
import AuthenTaxPayer from "../../context/afterAuthenTaxPayer";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../../context/search";
import { getAllTaxPayer } from "../../services/taxPayer";
function TaxPayerInfor() {
    const navigate = useNavigate();
    const [allTaxPayer, setAllTaxPayer] = useState([]);
    const [taxPayer, setTaxPayer] = useState({});
    const { afterAuthenTaxPayer, setAfterAuthenTaxPayer } =useContext(AuthenTaxPayer);
    const { search, setSearch } = useContext(Search);
  
    // get all tax-payer
    useEffect(() => {
      const get = async () => {
        try {
          const newTaxPayer = await getAllTaxPayer('tax-payer'); 
          setAllTaxPayer(newTaxPayer);
        } catch (error) {
          // Handle any errors appropriately
          console.error("An error occurred while fetching tax payers:", error);
        }
      };
      get();
    }, []);
  
    // search tax-payer
  
    useEffect(() => {
      const get = async () => {
        try {
          const findTaxPayer = allTaxPayer.find(item => item[search.type] === search.data);  
          setTaxPayer(findTaxPayer)   
        } catch (error) {
          // Handle any errors appropriately
          console.error("An error occurred while fetching tax payers:", error);
        }
      };
      get();
    }, [search,allTaxPayer]);
  
    const handleClickInforAuthen = () => {
      setAfterAuthenTaxPayer(true);
      navigate("/tax-pay");
    };
  
    return (
      <>
        <div className="content">
          <div className="content__title">
            <h3>Thông tin người đóng thuế</h3>
          </div>
          <div className="content__tax-payer-infor">
            <table className="content__table">
              <thead>
                <tr>
                  <th>Thông Tin</th>
                  <th>Chi Tiết</th>
                </tr>
              </thead>
              <tbody>
                {taxPayer && (
                    <>
                      <tr>
                        <td>Mã số thuế</td>
                        <td>{taxPayer.mst}</td>
                      </tr>
                      <tr>
                        <td>Căn cước công dân</td>
                        <td>{taxPayer.CCCD}</td>
                      </tr>
                      <tr>
                        <td>Tên người nộp thuế</td>
                        <td>{taxPayer.hoVaTen}</td>
                      </tr>
                      <tr>
                        <td>Ngày sinh</td>
                        <td>{taxPayer.ngaySinh}</td>
                      </tr>
                      <tr>
                        <td>Giới tính</td>
                        <td>{taxPayer.gioiTinh}</td>
                      </tr>
                      <tr>
                        <td>Thành phố</td>
                        <td>{taxPayer.dchk_tinhThanhPho}</td>
                      </tr>
                      <tr>
                        <td>Quận/huyện</td>
                        <td>{taxPayer.dchk_QuanHuyen}</td>
                      </tr>
                      <tr>
                        <td>Điện thoại</td>
                        <td>{taxPayer.sdt}</td>
                      </tr>
                    </>
                )}
              </tbody>
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