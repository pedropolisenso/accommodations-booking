module.exports = {
  presets: [
    ["next",
      {
        "preset-env": {
          useBuiltIns: "entry"
        }
      }
    ]
  ],
  plugins: [
    ["styled-components", { ssr: true, displayName: true, preprocess: false }],
    ["module-resolver", { root: ["./"] } ]
  ],
};