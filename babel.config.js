module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    // 'react-native-reanimated/plugin',

    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          test: './test',
          underscore: 'lodash',
        },
      },
    ],
  ],
};
