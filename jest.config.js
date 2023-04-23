module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx', 'src/**/*.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testMatch: [
    '<rootDir>/src/**/*test.tsx',
    '<rootDir>/src/**/*test.ts',
  ]
};
