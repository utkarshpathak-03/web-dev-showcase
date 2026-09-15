import pool from "../config/db";

export const getProfileData = async () => {
    const result = await pool.query(`
    SELECT
      name,
      email,
      weight,
      height,
      fitness_goal
    FROM users
    LIMIT 1
  `);

    if (result.rows.length === 0) {
        return null;
    }

    const user = result.rows[0];

    return {
        name: user.name,
        email: user.email,
        weight: user.weight,
        height: user.height,
        fitnessGoal: user.fitness_goal
    };
};