import { post } from "../utils/request"

export const register = async (options) => {
    const res = await post(``, options)
    return res
}