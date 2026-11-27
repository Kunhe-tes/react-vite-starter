# React Vite Starter

面向新项目的 React 18、TypeScript、Vite 和 Less 单页应用脚手架。首页是空白的，可以直接从页面组件开始开发。

在 GitHub 仓库中点击 **Use this template**，即可创建自己的独立项目。

## 本地开发

需要 Node.js 22.9 或更高版本和 npm 9.8 或更高版本。

```sh
npm ci
npm run dev
```

## 开发新页面

- `src/main.tsx` 挂载 React 应用并加载全局样式。
- `src/App.tsx` 装配路由并处理未知路径。
- `src/routes.tsx` 集中登记路由，页面按需加载。
- `src/pages/Home/index.tsx` 是首页入口。新增页面可以在 `src/pages/` 下建目录并登记路由。
- `src/styles/base.less` 放全局基础样式，页面专用样式可放在页面目录中。

## 环境与部署

需要自定义配置时，将 `.env.example` 复制为 `.env.local`。

- `VITE_BASE_PATH` 默认是 `/`。部署到子路径时，在构建前设成对应路径，例如 `/my-app/`。
- `VITE_API_PROXY_TARGET` 启用本地开发服务器的 `/api` 代理。页面使用同源相对路径请求，代理保留 `/api` 前缀。部署时由服务器配置 API 转发。
- 前端环境变量只用于公开值。

`npm run build` 生成 `dist/`，JS 和 CSS 的构建目标为 Chromium 108。部署时为页面路由配置 SPA 回退至对应的 `index.html`，以支持直接访问和刷新。使用 `npm run preview` 可在本地预览构建产物。

## 检查

```sh
npm run format:check
npm run typecheck
npm run lint
npm run build
```
