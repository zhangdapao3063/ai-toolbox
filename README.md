# AI 创作工具箱 — Next.js 全栈版

> 参考 [智语写作](https://zhiyuxiezuo.com/toolbox) 构建的全链路 AI 创作工具平台

## 🚀 快速开始

### 1. 安装依赖

```bash
cd ai-toolbox-next
npm install
```

### 2. 配置 Dify API

复制环境变量模板并填写你的 Dify 信息：

```bash
cp .env.example .env.local
```

编辑 `.env.local`，填入：

```env
NEXT_PUBLIC_DIFY_API_URL=https://api.dify.ai/v1
DIFY_API_KEY=app-xxxxxxxxxxxxxxxxxxxxxxxx
```

> 💡 **没有 Dify？** 
> - 访问 [dify.ai](https://dify.ai) 注册并创建应用
> - 或自部署 Dify：[GitHub - langgenius/dify](https://github.com/langgenius/dify)

### 3. 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)

---

## 📁 项目结构

```
ai-toolbox-next/
├── app/
│   ├── layout.tsx          # 全局布局 + 主题配置
│   ├── page.tsx            # 首页（工具箱主视图）
│   ├── globals.css          # 全局样式
│   └── api/
│       ├── tools/route.ts  # GET  /api/tools    → 工具列表 API
│       └── chat/route.ts   # POST /api/chat     → Dify 对话 API（SSE 流式）
│
├── components/
│   ├── ToolCard.tsx        # 工具卡片组件
│   ├── FilterTabs.tsx       # 分类筛选标签
│   ├── SearchBar.tsx        # 搜索框
│   ├── ThemeToggle.tsx      # 主题切换按钮
│   └── ToolModal.tsx       # 工具详情弹窗（含 AI 对话交互）
│
├── data/
│   └── tools.ts            # 工具数据定义（新增工具在这里加）
│
├── lib/
│   └── dify.ts             # Dify API 对接层（封装流式 SSE）
│
├── types/
│   └── index.ts            # TypeScript 类型定义
│
├── .env.example             # 环境变量模板
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🛠️ 团队开发指南

### 添加新工具

1. 打开 `data/tools.ts`
2. 在 `TOOLS` 数组中追加新工具对象：

```typescript
{
  id: 17,
  category: "writing",        // 分类
  icon: "🔥",
  name: "AI 热点追踪",
  tag: "new",
  tagText: "新",
  desc: "实时追踪平台热点，生成创作方向建议",
  detailDesc: "...",
  models: ["GPT-4o", "Claude"],
  features: [...],
  accent: "linear-gradient(...)",
  iconBg: "linear-gradient(...)",
}
```

### 对接 Dify 工作流

每个工具需要关联一个 Dify App/Workflow：

1. 在 Dify 中创建 App，选择「对话型应用」或「工作流」
2. 编写该工具专用的 Prompt（系统提示词）
3. 将 Dify App 的 API Key 填入环境变量
4. 在 `lib/dify.ts` 中配置 `difyAppId` 映射

### 部署到 Vercel

```bash
npm install -g vercel
vercel
```

在 Vercel 环境变量中添加：
- `NEXT_PUBLIC_DIFY_API_URL`
- `DIFY_API_KEY`

---

## 🎨 技术栈

| 层次 | 技术 | 说明 |
|------|------|------|
| 框架 | Next.js 15 (App Router) | React 全栈框架 |
| 样式 | Tailwind CSS 3 | 原子化 CSS |
| 语言 | TypeScript 5 | 类型安全 |
| AI 接入 | Dify API | 大模型工作流平台 |
| 部署 | Vercel | 免费托管 |

---

## 📚 学习资源

| 主题 | 资源 |
|------|------|
| Next.js App Router | https://nextjs.org/docs/app |
| Tailwind CSS | https://tailwindcss.com/docs |
| Dify API | https://docs.dify.ai/getting-started/api-connectivity |
| TypeScript | https://www.typescriptlang.org/docs/ |
| SSE 流式前端 | https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream |
