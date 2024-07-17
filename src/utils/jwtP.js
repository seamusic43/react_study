import pkg from 'jsonwebtoken';
const {sign, verify} = pkg;

const secret = 'very secret';

export const jwtSignP = (payload, options = {}) => {
  return new Promise((resolve, reject) => {
    try {
      const jwt = sign(payload, secret, options);
      resolve(jwt);
    } catch (err) {
      reject(err);
    }
  });
};

export const jwtVerifyP = (token, options = {}) => {
  return new Promise((resolve, reject) => {
    try {
      const decoded = verify(token, secret, options);
      resolve(decoded);
    } catch (err) {
      reject(err);
    }
  });
}