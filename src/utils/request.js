const API_DOMAIN = 'http://localhost:3001';

export const get = async (path) => {
  const res = await fetch(`${API_DOMAIN}/${path}`);
  return res;
}

export const post = async (data,path) => {
  const res = await fetch(`${API_DOMAIN}/${path}`, {
    method: 'POST',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json' } ,
    body: JSON.stringify(data)
  });
  return res;
}

export const del = async (id,path) => {
  const res = await fetch(`${API_DOMAIN}/${path}/${id}`, {
    method: 'DELETE',
    Accept: 'application/json',
  });
  return res;
}

export const update = async (path,value) => {
  const res = await fetch(`${API_DOMAIN}/${path}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(value),
  });
  return res;
}