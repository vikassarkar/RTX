module.exports = {
    "verbose": true,
    "collectCoverageFrom": [
      "src/tests/**/**/*.ts",
      "src/tests/**/**/*.tsx"
    ],
    "collectCoverage": true,
    "coverageDirectory": "./src-output/tests-coverage/",
    "moduleFileExtensions": [
      "js",
      "jsx",
      "ts",
      "tsx"
    ],
    "testRegex": "/src/tests/.*\\.(ts|tsx|js|jsx)$",
    "setupTestFrameworkScriptFile": "mock-local-storage",
    "transform": {
        "^.+\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "transformIgnorePatterns": [
      "node_modules/"
    ]
};