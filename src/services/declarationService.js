import { post } from "../utils/request";

export const declaration = async (options) => {
    const res = await post(`api/tk-thue-tien-luong-cong/submit`, options)
    return res
}