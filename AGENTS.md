# AGENTS.md · 前端开发规范

本仓库使用 React 18、TypeScript strict、Vite、React Router 和 Less。开发以现有项目配置、已确认的需求和接口契约为准。

## 项目结构与依赖

- `index.html` 和 `src/main.tsx` 是唯一的 HTML 与 React 挂载入口。`src/App.tsx` 装配路由，独立 URL 页面在 `src/routes.tsx` 登记并按需加载。
- 页面代码按「页面入口 → 布局 → 业务区块 → 子组件」组织。入口 `src/pages/<PageName>/index.tsx` 装配页面并管理跨区块状态，`layout/` 管理区块排列、间距和滚动边界，`components/` 存放业务区块，`data/` 存放页面专用数据逻辑。
- 专用子组件放在所属业务区块下，本页复用放在页面的 `components/common/`，跨页复用放在 `src/components/`。目录按实际职责创建。 [页面目录结构与文件职责](docs/frontend/pages-and-components.md#目录路由与样式)
- 使用 Node.js 22.9.0 或以上、npm 9.8.0 或以上，通过 `npm ci` 安装。`react` 和 `react-dom` 均声明为 `^18`，实际锁定版本须一致。
- 优先复用现有依赖，变更依赖时同步更新 `package-lock.json`。选用或升级依赖前核对候选版本和兼容性。 [依赖管理与可选依赖范围](docs/frontend/dependencies.md)

## 页面、组件与状态

- 新建页面前先明确核心流程。有原型时按原型核对布局和交互，无原型时先实现可运行的核心流程。 [页面与组件开发](docs/frontend/pages-and-components.md)
- 使用函数组件和声明式渲染，用户操作放在事件回调中。局部状态留在使用它的组件，共享状态放在最近的共同父层。派生值从现有数据计算。
- 在模块顶层定义组件。图表等重型模块按页面或功能按需加载，针对已定位的渲染开销再使用记忆化。 [组件编码与性能](docs/frontend/pages-and-components.md#加载与渲染性能)

## 接口、类型与配置

- 复用已有请求入口，默认使用同源路径。接口失败时展示约定的错误或空态。接入新接口、Mock 或持久化时查阅对应约定。 [接口、Mock 与持久化](docs/frontend/api-and-data.md)
- 并发发起相互独立的请求，复用同一次查询的结果，防止过期响应覆盖当前结果。
- 显式定义 Props 和业务类型，外部数据在边界校验。带 `VITE_` 前缀的变量只放公开值，凭据由服务端管理。

## 样式、兼容性与交付

- 组件样式随组件维护，父层负责布局和滚动边界。遵循仓库的 Prettier 和 ESLint 配置，控制语句使用大括号。
- JS 和 CSS 的构建目标为 Chromium 108。功能变更在浏览器验证受影响的流程。调整环境、部署子路径或核对验收步骤时查阅部署细则。 [验证与部署](docs/frontend/verification-and-deployment.md)
- 提交前运行 `npm run format:check`、`npm run typecheck`、`npm run lint` 和 `npm run build`。
