# Backend directory

## Structure

```
backend/
├── src/
│   ├── server.js           # Entry point
│   ├── config/             # Configuration files
│   ├── routes/             # API routes
│   ├── controllers/        # Business logic
│   ├── models/             # Database models
│   ├── middleware/         # Custom middleware
│   ├── services/           # Business services
│   └── utils/              # Helper functions
├── tests/                  # Unit and integration tests
├── .env.example            # Environment variables template
└── package.json            # Dependencies
```

## Starting the Backend

```bash
cd backend
npm install
npm run dev
```

Server will run on `http://localhost:3001`
