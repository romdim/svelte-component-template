module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ]
  ],
  env: {
    // In production remove data-testid attributes
    production: {
      plugins: [["react-remove-properties",{
        properties: ['data-test']
      }]]
    }
  }
}