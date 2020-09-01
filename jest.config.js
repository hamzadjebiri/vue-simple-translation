module.exports = {

  moduleFileExtensions:
  [
    "js",
    "json",
    "vue"
  ],

  moduleNameMapper:
  {
    "^@/(.*)$": "<rootDir>/src/$1"
  },

  roots:
  [
    "<rootDir>","<rootDir>/tests/"
  ],

  testEnvironment: "node",

  // transform:
  // {
  //   "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
  //   ".*\\.(vue)$": "vue-jest",
  //   ".*\\.(js)$": "babel-jest"
  // },

  verbose: true,

  // snapshotSerializers:
  //   [
  //     "<rootDir>/node_modules/jest-serializer-vue"
  //   ],

    transformIgnorePatterns: ["/node_modules"],
 
  testEnvironment:"jsdom"
}
