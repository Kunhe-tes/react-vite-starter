import tseslint from 'typescript-eslint'

/**
 * 项目 ESLint 配置：当前只强制 curly 规则（if/else 等控制语句必须带大括号）。
 * 其余规则按需逐步开启，避免一次性引入大量噪音。
 */
export default [
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: { parser: tseslint.parser },
    rules: {
      curly: ['error', 'all'],
    },
  },
]
