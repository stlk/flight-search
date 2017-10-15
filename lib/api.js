import fetch from 'isomorphic-unfetch';

export async function getProfile(name) {
  const res = await fetch(`https://api.github.com/users/${name}`);
  return await res.json();
}

export async function getGists(name) {
  const res = await fetch(`https://api.github.com/users/${name}/gists`);
  return await res.json();
}

export async function getGist(id) {
  const res = await fetch(`https://api.github.com/gists/${id}`);
  return await res.json();
}
