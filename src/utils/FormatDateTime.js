const  FormatDateTime = (date) => {
  try {
    const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Tháng trong JavaScript được đếm từ 0, do đó cần cộng thêm 1
  const year = date.getFullYear();
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const second = date.getSeconds().toString().padStart(2, '0');

  return `${day}-${month}-${year} ${hour}:${minute}:${second}`;
  } catch (error) {
<<<<<<< HEAD
    return ""
=======
    console.log(error)
>>>>>>> 8ed7a468f5ea92c53d7f02016df2d3195fa26a5b
  }
}

export const  FormatTimeOnlyDMY = (date) => {
  try {
    date = new Date(date.toString());
    var dateFormat = date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
  });
    return dateFormat
  } 
  catch (error) {
<<<<<<< HEAD
    return ""
=======
    console.log(error)
>>>>>>> 8ed7a468f5ea92c53d7f02016df2d3195fa26a5b
  }
  

}


export default FormatDateTime
