import { query } from '../config/database.js';

export const getAllProjects = async (req, res) => {
  try {
    const { userId } = req.user;

    const result = await query(
      'SELECT * FROM projects WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    );

    res.json({ projects: result.rows });
  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    const result = await query(
      'SELECT * FROM projects WHERE id = $1 AND user_id = $2',
      [id, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get project error:', error);
    res.status(500).json({ error: 'Failed to fetch project' });
  }
};

export const createProject = async (req, res) => {
  try {
    const { name, description, type } = req.body;
    const { userId } = req.user;

    if (!name) {
      return res.status(400).json({ error: 'Project name required' });
    }

    const result = await query(
      'INSERT INTO projects (user_id, name, description, type) VALUES ($1, $2, $3, $4) RETURNING *',
      [userId, name, description || '', type || 'web']
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Create project error:', error);
    res.status(500).json({ error: 'Failed to create project' });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;
    const { name, description, status } = req.body;

    const result = await query(
      'UPDATE projects SET name = COALESCE($1, name), description = COALESCE($2, description), status = COALESCE($3, status) WHERE id = $4 AND user_id = $5 RETURNING *',
      [name, description, status, id, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Update project error:', error);
    res.status(500).json({ error: 'Failed to update project' });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    const result = await query(
      'DELETE FROM projects WHERE id = $1 AND user_id = $2',
      [id, userId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Delete project error:', error);
    res.status(500).json({ error: 'Failed to delete project' });
  }
};
