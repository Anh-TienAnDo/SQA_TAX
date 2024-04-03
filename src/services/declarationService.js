import { post } from "../utils/request";

export const declaration = async (options) => {
    const res = await post(``, options)
    return res
}