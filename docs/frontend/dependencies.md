# 依赖管理与可选依赖范围

项目当前使用的依赖及版本范围以 `package.json` 为准，实际安装版本由 `package-lock.json` 记录。React 类型包保持 18.x。React Router、Less、ESLint 和 typescript-eslint 已由脚手架提供。

## 可选依赖范围

按功能从以下范围选择。安装前核对选中版本的 peer 依赖以及目标浏览器兼容性。

| 用途                 | 候选范围                                                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UI 与样式            | `antd ^5.29.1`、`antd-style ^3.7.1`、`@ant-design/icons ^5.0.1`、`classnames ^2.5.1`                                      |
| 图表                 | `echarts ^6.0.0`、`echarts-for-react ^3.0.2`                                                                              |
| Hooks 与状态         | `ahooks ^3.9.6`、`immer ^10.1.1`、`use-context-selector ^2.0.0`、`zustand ^5.0.3`                                         |
| 日期、工具与错误边界 | `dayjs ^1.11.13`、`lodash ^4.17.21`、`react-error-boundary ^6.0.0`、`uuid ^11.0.5`、`js-base64 ^3.7.8`                    |
| 开发工具             | `@eslint/js ^9.25.0`、`@types/lodash ^4.17.15`、`eslint-plugin-react-hooks ^5.2.0`、`eslint-plugin-react-refresh ^0.4.19` |

## 变更依赖

- 优先复用项目已有依赖。页内交互优先用 React 本地状态，有复杂图表时再引入 ECharts。
- 核对 Node.js 版本、React peer 依赖、浏览器兼容性和许可证。使用 ECharts 6 时，核对实际选中的 `echarts-for-react` 版本是否支持 ECharts 6。
- 定位 peer 冲突涉及的包和版本，在兼容范围内解决。避免用 `--force`、`--legacy-peer-deps` 绕过检查。
- 由 npm 更新 `package-lock.json`，与 `package.json` 一同提交。变更后验证 `npm ci`，运行 `npm audit` 并记录暂未解决的问题。
