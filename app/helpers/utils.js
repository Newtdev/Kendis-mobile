import AsyncStorage from '@react-native-async-storage/async-storage';
import currencyjs from 'currency.js';

export const formatCurrency = amount => {
  console.log('amount', amount);
  return currencyjs(amount || 0, {symbol: 'N'}).format();
};

export const setItem = async (type, key, value) => {
  try {
    if (typeof type !== 'object') {
      await AsyncStorage.setItem(key, value);
    } else {
      const jsonData = JSON.stringify(value);

      await AsyncStorage.setItem(key, jsonData);
    }
  } catch (error) {
    throw new error(error);
  }
};

export const getItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    throw new error(error);
  }
};
