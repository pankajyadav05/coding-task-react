import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
 // path to app
  dir: './',
})

// configurations
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
}

export default createJestConfig(config)