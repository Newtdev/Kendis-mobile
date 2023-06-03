module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',

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
