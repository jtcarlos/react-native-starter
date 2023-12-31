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
            "@redux": "./src/redux",
            "@modules": "./src/modules",
            "@form": "./src/components/form",
            "@layout": "./src/components/layout",
            "@interface": "./src/components/interface",
          },
        },
      ],
    ],
  };
};
