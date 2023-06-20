import {useWindowDimensions} from 'react-native';

export const Dimension = () => {
  const {width, height} = useWindowDimensions();

  return {width, height};
};
