module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    
    //manually added...
    plugins: [
      
      'react-native-reanimated/plugin',
    ],
    // manually added...
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };

  
};
