import 'isomorphic-fetch';

export async function get (path) {
  const url = __SERVER__? `http://localhost:3000${path}`: path;
  return fetch(url, {method:'get'}).then(res => res.json());
}

export async function post (path) {
  const url = __SERVER__? `http://localhost:3000${path}`: path;
  return fetch(url, {method:'post'}).then(res => res.json());
}
