import { get } from '../utils/request';

export const getAllTaxPayer = async (path) => {
  const res = await get(path);
  return res;
}

export const getTaxPayer = async (path) => {
  const res = await get(path);
  return res;
}