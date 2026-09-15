import pool from "../config/db";

export const getProfileData = async () => {
    const result = await pool.query(`
    SELECT
      id,
      name,
      email,
      weight,
      height,
      fitness_goal
    FROM users
    LIMIT 1
  `);

    const user = result.rows[0];

    return {
        name: user.name,
        email: user.email,
        weight: user.weight,
        height: user.height,
        fitnessGoal: user.fitness_goal
    };
};