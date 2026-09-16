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


export const updateProfileData = async (data: {
  name?: string;
  email?: string;
  weight?: number;
  height?: number;
  fitnessGoal?: string;
}) => {
  const {
    name,
    email,
    weight,
    height,
    fitnessGoal
  } = data;

  const result = await pool.query(
    `
    UPDATE users
    SET
      name = COALESCE($1, name),
      email = COALESCE($2, email),
      weight = COALESCE($3, weight),
      height = COALESCE($4, height),
      fitness_goal = COALESCE($5, fitness_goal)
    RETURNING
      name,
      email,
      weight,
      height,
      fitness_goal
    `,
    [name, email, weight, height, fitnessGoal]
  );

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
