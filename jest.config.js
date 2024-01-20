module.exports = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    preset: 'ts-jest'
};