module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@core": "./src/core",
            "@modules": "./src/modules",
            "@layouts": "./src/components/layouts",
            "@interfaces": "./src/components/interface",
          },
        },
      ],
    ],
  };
};
