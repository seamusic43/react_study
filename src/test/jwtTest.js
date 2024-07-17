import * as U from '../utils/index.js';

const jwtNomalTest = async() => {
  try {
    const jwt = await U.jwtSignP({name: 'John Doe', age: 30});
    console.log('jwtNormalTest jwt:', jwt);
    const decoded = await U.jwtVerifyP(jwt);
    console.log('jwtNormalTest decoded:', decoded);
  } catch (err) {
    if (err instanceof Error) {
      console.log('jwtNormalTest Error:', err.message);
    } else {
      console.log('jwtNormalTest Error:', err);
    }
  }
}

const jwtExceptionTest = async() => {
  try {
    const decoded = await U.jwtVerifyP('1234');
    console.log('jwtExceptionTest decoded:', decoded);
  } catch (err) {
    if (err instanceof Error) {
      console.log('jwtExceptionTest Error:', err.message);
    } else {
      console.log('jwtExceptionTest Error:', err);
    }
  }
}

const jwtExpiredTest = async() => {
  const jwt = await U.jwtSignP({name: 'John Doe', age: 30}, {expiresIn: '1s'});
  const id = setTimeout(async() => {
    try {
      const decoded = await U.jwtVerifyP(jwt);
      console.log('jwtExpiredTest decoded:', decoded);
    } catch (err) {
      if (err instanceof Error) {
        console.log('jwtExpiredTest Error:', err.message);
      } else {
        console.log('jwtExpiredTest Error:', err);
      }
    }
  }, 2000);
  console.log('jwt id is', id)
}

jwtNomalTest().then(jwtExceptionTest).then(jwtExpiredTest);