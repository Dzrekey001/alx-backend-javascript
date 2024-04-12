import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser(firstName = 'Guililaume', lastName = 'Salva', fileName = 'photo-profile-1') {
  try {
    const photo = await uploadPhoto(fileName);
    const user = await createUser(firstName, lastName);
    return { photo, user };
  } catch (error) { return { photo: null, user: null }; }
}
