export async function getData(url) {
  const result = { data: null, error: null };
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw {
        status: res.status || "00",
        statusText: res.statusText || "Ocurrio un error",
      };
    }
    result.data = res.json();
  } catch (err) {
    result.error = err;
    console.error(err);
  }
  return result;
}
