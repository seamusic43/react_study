import bcrypt from 'bcrypt';
const saltRounds = 10;

export const hashPasswordP = (password) => {
  return new Promise( async (resolve, reject) => {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(password, salt);
      resolve(hash);
    } catch (err) {
        reject(err);
    }
  });
}

export const comparePasswordP = (password, hash) => {
  return new Promise( async (resolve, reject) => {
    try {
      const match = await bcrypt.compare(password, hash);
      resolve(match);
    } catch (err) {
        reject(err);
    }
  });
}