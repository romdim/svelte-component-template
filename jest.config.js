const autoPreprocess = require('svelte-preprocess');

module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
    '^.+\\.svelte$': [
      'jest-transform-svelte', { 
        preprocess: autoPreprocess() 
      }
    ]
  },
  moduleFileExtensions: ['ts', 'js', 'svelte']
}