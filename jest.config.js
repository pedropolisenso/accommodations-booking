module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
  testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}", "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}"],
  transform: {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/jest-transforme.js"
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"]
};