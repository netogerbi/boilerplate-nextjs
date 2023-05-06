// jest.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' });

// Any custom config you want to pass to Jest
const customJestConfig = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*test.tsx', '<rootDir>/src/**/*test.ts'],
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
