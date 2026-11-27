# AGENTS.md · 前端开发规范

以项目配置、已确认的需求和接口契约为准。项目使用 React 18、TypeScript strict、Vite、React Router 和 Less。

## 通用规范

- **环境与依赖**。使用 Node.js 22.9.0 或以上、npm 9.8.0 或以上，通过 `npm ci` 安装。优先复用现有依赖。`react` 和 `react-dom` 均声明为 `^18`，实际锁定版本一致。依赖变更时同步更新 `package-lock.json`。
- **入口与目录**。保留 `index.html` 和 `src/main.tsx` 作为唯一挂载入口。独立 URL 在 `src/routes.tsx` 登记。页面专用组件随页面维护，跨页复用组件放入 `src/components/`。
- **组件与状态**。使用函数组件和声明式渲染。局部状态留在使用它的组件，共享状态放在最近的共同父层。派生值从现有数据计算，组件样式随组件维护。
- **类型与代码风格**。显式定义 Props 和业务类型，外部数据在边界校验。遵循仓库的 Prettier 和 ESLint 配置，控制语句使用大括号。
- **接口与配置**。复用已有请求入口，默认采用同源路径。真实请求失败时展示约定的错误或空态。带 `VITE_` 前缀的变量只放公开值，凭据由服务端管理。
- **兼容性与验证**。JS 和 CSS 的构建目标为 Chromium 108。功能变更在浏览器验证受影响的流程。提交前运行 `npm run format:check`、`npm run typecheck`、`npm run lint` 和 `npm run build`。

## 专题文档

涉及下列具体工作时，查阅对应文档。

| 场景                                                 | 文档                                                       |
| ---------------------------------------------------- | ---------------------------------------------------------- |
| 新增或升级依赖，核对候选版本和 peer 兼容性           | [依赖管理与可选依赖范围](docs/frontend/dependencies.md)    |
| 新建页面、对照原型迁移，或组织复杂布局和共享状态     | [页面与组件开发](docs/frontend/pages-and-components.md)    |
| 接入接口、设计 Mock、处理请求竞态或新增持久化        | [接口、Mock 与持久化](docs/frontend/api-and-data.md)       |
| 调整环境配置、部署子路径，或核对浏览器验收与交接步骤 | [验证与部署](docs/frontend/verification-and-deployment.md) |
