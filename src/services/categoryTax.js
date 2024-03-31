import {get,post} from '../utils/request';

export const getAllCategoryTax = async (option) => {
  const res = await get(option);
  const data = await res.json();
  return data;
}
// export const postBooking = async (data,option) => {
//   const res = await post(data,option);
//   return res;
// }