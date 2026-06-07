module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Le dice a Jest que cargue las variables de entorno de .env antes de los tests
  setupFiles: ['dotenv/config'],
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',  // <-- El signo de exclamación debe ir DENTRO de las comillas
    '!src/app.ts',     // <-- El signo de exclamación debe ir DENTRO de las comillas
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};