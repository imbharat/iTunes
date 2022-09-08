module.exports = {
    roots: ['<rootDir>'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx$',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    collectCoverage: true,
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "jsdom"
};