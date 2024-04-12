module.exports = {
  jest: {
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
    moduleNameMapper: {
      //   "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    },
  },
};
