module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        // Specify the useBuiltIns option
        useBuiltIns: 'usage', // or 'entry' if you prefer
        corejs: 3, // Specify the version of core-js
      },
    ],
  ],
}