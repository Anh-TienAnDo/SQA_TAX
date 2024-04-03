import { get } from '../utils/request';

export const getUnpaidTax = async (path) => {
    const res = await get(path);
    return res;
}