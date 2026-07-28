# SBM - Quick Start Guide

## Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL 13+ (or Docker)
- Git

## Installation - Option 1: Local Development

```bash
git clone https://github.com/ecoffercom-dot/SBM.git
cd SBM

cd frontend && npm install
cd ../backend && npm install
cd ..
```

## Installation - Option 2: Docker (Recommended)

```bash
docker-compose up -d
```

## Running the Application

### With Local Environment

1. Setup Database:
```bash
cp .env.example .env
psql -U your_user -d sbm_db -f database/schema.sql
```

2. Start Backend:
```bash
cd backend
npm run dev
```

3. Start Frontend:
```bash
cd frontend
npm run dev
```

### With Docker

```bash
docker-compose up -d
```

## Access Points

- Frontend: http://localhost:5173
- Backend: http://localhost:3001
- Database: localhost:5432

## Documentation

- [Architecture](./docs/ARCHITECTURE.md)
- [API Docs](./docs/API.md)
- [Setup Guide](./docs/SETUP.md)
- [Contributing](./CONTRIBUTING.md)

## Next Steps

1. Read [ARCHITECTURE.md](./docs/ARCHITECTURE.md)
2. Check [API.md](./docs/API.md)
3. Start developing!

---

Happy Coding! 🚀
