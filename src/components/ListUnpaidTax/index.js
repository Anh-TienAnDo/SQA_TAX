import { Button, Checkbox } from "antd";
import "./listUnpaidTax.css";
function ListUnpaidTax() {
  const handelClick = (e) => {};
  const handleDetailTax = (e) => {};
  return (
    <>
      <div className="content__list-unpaid-tax">
        <div class="content__grid-list-unpaid-tax-container">
          <div class="grid-item-header">Nội dung khoản nộp NSNN</div>
          <div class="grid-item-header">Số tiền (VND)</div>
          <div class="grid-item-header">Số thuế đã nộp tại NH/TT</div>
          <div class="grid-item-header">Xem chi tiết</div>
          <div class="grid-item-header">Chọn khoản nộp</div>

          <div class="grid-item">
            4944 - Tiền chậm nộp các khoản khác điều tiết 100% ngân sách địa
            phương theo quy định của pháp luật do ngành thuế quản lý
          </div>
          <div class="grid-item">939</div>
          <div class="grid-item">0</div>
          <div class="grid-item">
            <Button type="link">Xem</Button>
          </div>
          <div class="grid-item">
            <Checkbox onChange={handelClick}></Checkbox>
          </div>
        </div>
      </div>
    </>
  );
}
export default ListUnpaidTax;
