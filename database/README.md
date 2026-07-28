# Database directory

## Schema

The database uses PostgreSQL with the following main tables:

- **users**: User accounts and authentication
- **projects**: User projects
- **project_files**: Code files for each project
- **chat_messages**: AI chat history
- **deployments**: Project deployment records

## Setup

To initialize the database:

```bash
psql -U sbm_user -d sbm_db -f schema.sql
```

## Migrations

Future schema changes should be added as migration files in the `migrations/` directory.
