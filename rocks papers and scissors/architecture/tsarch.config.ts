export default {
  rules: [
    {
      name: 'No circular dependencies',
      selector: '../rps-library/**/*.ts',
      disallow: [
        '../rps-machine-simulator/**/*.ts',
        '../requirements/**/*.ts',
        '../architecture/**/*.ts'
      ],
      message: 'Circular dependencies are not allowed',
    },
    {
      name: 'No dependencies from src to tests',
      selector: '../**/*.ts',
      disallow: ['../**/*.test.ts'],
      message: 'Source files should not depend on test files',
    },
  ],
};
