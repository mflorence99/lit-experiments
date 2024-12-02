import myConfig from 'eslint-config-mflorence99';

export default [
  ...myConfig,
  {
    ignores: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  }
];
