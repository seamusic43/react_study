import * as U from '../utils/index.js';

const hashTest = async () => {
  const password = '1234';
  try {
    const hash = await U.hashPasswordP(password);
    console.log('Hash:', hash);
    const match = await U.comparePasswordP(password, hash);
    console.log('Match:', match);
    const same2 = await U.comparePasswordP('abck', hash);
    console.log('Same2:', same2);
  } catch (err) {
    console.error(err);
  }
}

hashTest();