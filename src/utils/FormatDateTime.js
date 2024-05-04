const  FormatDateTime = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Tháng trong JavaScript được đếm từ 0, do đó cần cộng thêm 1
  const year = date.getFullYear();
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const second = date.getSeconds().toString().padStart(2, '0');

  return `${day}-${month}-${year} ${hour}:${minute}:${second}`;
}

export default FormatDateTime
