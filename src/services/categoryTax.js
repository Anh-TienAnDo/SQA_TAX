import { get } from '../utils/request';

export const getAllCategoryTax = async (path) => {
    const res = await get(path);
    return res;
}