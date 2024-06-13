import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userFetch = () => {
  const [data, setData] = useState(null);

  useEffect(async () => {
    try {
      // const jsonValue = JSON?.stringify(userLoginDat  a);
      const value = await AsyncStorage?.getItem('my-keyiii');

      setData(JSON?.parse(value));
    } catch (e) {}
  }, []);
  return [data];
};
export default userFetch;
