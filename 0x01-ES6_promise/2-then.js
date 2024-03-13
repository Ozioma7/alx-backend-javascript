export default function handleResponseFromAPI(promise) {
  const done = { status: 200, body: 'success' };
  return promise
    .then(() => done)
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
