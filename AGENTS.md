# AGENTS.md · 前端开发规范

以项目配置、已确认的需求和接口契约为准。项目使用 React 18、TypeScript strict、Vite、React Router 和 Less。

- 使用 Node.js 22.9.0 或以上、npm 9.8.0 或以上，通过 `npm ci` 复现安装。
- `react` 和 `react-dom` 均声明为 `^18`，实际锁定版本一致。JS 和 CSS 的构建目标为 Chromium 108。

## 按任务查阅

开始下列工作前，先读相应文档。任务涉及多个主题时，阅读对应的各份文档。

| 任务                                      | 文档                                                       |
| ----------------------------------------- | ---------------------------------------------------------- |
| 新增或升级依赖，选用 UI、图表或状态管理库 | [依赖管理与可选依赖范围](docs/frontend/dependencies.md)    |
| 新建页面、迁移原型、调整组件、路由或样式  | [页面与组件开发](docs/frontend/pages-and-components.md)    |
| 接入接口、编写 Mock 或处理浏览器持久化    | [接口、Mock 与持久化](docs/frontend/api-and-data.md)       |
| 验证功能、改动环境配置、部署或提交        | [验证与部署](docs/frontend/verification-and-deployment.md) |
