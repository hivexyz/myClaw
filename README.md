# myClaw

基于 `FastAPI + TypeScript(Vite)` 的可扩展前后端工程骨架。

## 项目结构（工程化）

```text
.
├─ backend/
│  ├─ app/
│  │  ├─ api/              # 路由层
│  │  ├─ core/             # 配置与基础设施
│  │  ├─ schemas/          # DTO / 数据模型
│  │  ├─ services/         # 业务服务层
│  │  └─ main.py           # 应用入口
│  └─ requirements.txt
└─ frontend/
   ├─ src/
   │  ├─ api/              # 请求层与服务层
   │  ├─ config/           # 环境配置
   │  ├─ pages/            # 页面渲染层
   │  └─ types/            # 类型定义
   └─ .env.example
```

## 1) 启动后端（FastAPI）

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

后端接口：
- `GET /api/health`
- `GET /api/message`

## 2) 启动前端（TypeScript + Vite）

```bash
cd frontend
npm install
npm run dev
```

浏览器访问：`http://localhost:5173`

## 环境变量

前端在 `frontend/.env` 中配置：

```bash
VITE_API_BASE_URL=http://localhost:8000
```