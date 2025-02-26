import axios from 'axios';
export const requestVerifyToken = async (token: string) => {
  try {
    const { data } = await axios.post(`http://localhost:4000/verify-token`, {
      secret: '6LedV1gjAAAAAHsIf6yaRSxynvvyFvemf_WkSi6C', ///process.env.REACT_APP_SECRET_KEY ??
      token,
    });
    return data;
  } catch (error) {
    console.log('error ', error);
  }
};
