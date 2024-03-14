import {post,get,del,update} from '../utils/request'

export const postRoom = async (data,options) => {
  const res = await post(data,options);
  return res;
}

export const getListRoom = async (options) => {
  const res = await get(options);
  const data =  await res.json();
  console.log(data);
  return data;
}

export const deleteRoom = async (id,options) => {
  const res = await del(id,options);
  return res;
}

export const updateRoom = async (id,options) => {
  const res = await update(`rooms/${id}`,options);
  return res;
}