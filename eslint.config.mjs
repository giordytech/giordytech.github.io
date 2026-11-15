// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import { configs as tseslintConfigs } from 'typescript-eslint';

export default defineConfig(
  {
    ignores: [
      'node_modules',
      // Next's build output and its generated type references.
      '.next',
      'out',
      'next-env.d.ts',
      '.agents',
      '.claude',
      '.playwright-cli',
    ],
  },
  eslint.configs.recommended,
  eslintPluginPrettierRecommended,
  ...tseslintConfigs.strictTypeChecked,
  {
    rules: {
      // Prettier's options live here, not in a .prettierrc: formatting runs only as this rule.
      'prettier/prettier': [
        'error',
        { singleQuote: true, experimentalTernaries: true },
        { usePrettierrc: false },
      ],
      curly: ['error', 'all'],
      'no-useless-rename': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      // node:test's describe and it return promises that the test runner awaits.
      '@typescript-eslint/no-floating-promises': [
        'error',
        {
          allowForKnownSafeCalls: [
            { from: 'package', package: 'node:test', name: ['describe', 'it'] },
          ],
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    // The two core hook rules only: the plugin's newer React Compiler rules are not part of this app's setup.
    files: ['src/**/*.tsx'],
    plugins: reactHooks.configs.flat.recommended.plugins,
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
  {
    // Run directly by Node, not bundled by Next: typed by tsconfig.node.json (Node's own module resolution).
    files: ['src/**/*.test.ts', 'scripts/**', 'eslint.config.mjs'],
    languageOptions: {
      parserOptions: {
        projectService: false,
        project: './tsconfig.node.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
