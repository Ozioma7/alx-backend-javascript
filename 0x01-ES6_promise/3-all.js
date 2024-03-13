import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promisePhoto = uploadPhoto();
  const promiseUser = createUser();
  return Promise
    .all([promisePhoto, promiseUser])
    .then((theData) => {
      console.log(`${theData[0].body} ${theData[1].firstName} ${theData[1].lastName}`);
    }).catch(() => console.log('Signup system offline'));
}
