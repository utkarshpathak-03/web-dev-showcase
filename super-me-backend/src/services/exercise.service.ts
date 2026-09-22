import pool from "../config/db";

interface ExerciseQuery {
  search?: string;
  category?: string;
  page: number;
  limit: number;
}

export const getExercisesData = async ({
  search,
  category,
  page,
  limit
}: ExerciseQuery) => {
  const offset = (page - 1) * limit;

  const values: (string | number)[] = [];
  const conditions: string[] = [];

  if (search) {
    values.push(`%${search}%`);

    conditions.push(`
      (
        name ILIKE $${values.length}
        OR muscle_group ILIKE $${values.length}
        OR category ILIKE $${values.length}
      )
    `);
  }

  if (category) {
    values.push(category);

    conditions.push(`category = $${values.length}`);
  }

  const whereClause =
    conditions.length > 0
      ? `WHERE ${conditions.join(" AND ")}`
      : "";

  const dataValues = [...values, limit, offset];

  const dataQuery = `
    SELECT
      id,
      name,
      muscle_group,
      category,
      image_url
    FROM exercises
    ${whereClause}
    ORDER BY name ASC
    LIMIT $${values.length + 1}
    OFFSET $${values.length + 2}
  `;

  const countQuery = `
    SELECT COUNT(*) AS total
    FROM exercises
    ${whereClause}
  `;

  const [dataResult, countResult] = await Promise.all([
    pool.query(dataQuery, dataValues),
    pool.query(countQuery, values)
  ]);

  const total = Number(countResult.rows[0].total);
  const totalPages = Math.ceil(total / limit);

  const exercises = dataResult.rows.map((exercise) => ({
    exerciseId: exercise.id,
    name: exercise.name,
    muscleGroup: exercise.muscle_group,
    category: exercise.category,
    imageUrl: exercise.image_url
  }));

  return {
    exercises,
    pagination: {
      page,
      limit,
      total,
      totalPages
    }
  };
};

interface CreateExercise {
  name: string;
  muscleGroup: string;
  category: string;
  imageUrl: string
}
export const createExerciseData = async ({
  name, muscleGroup, category, imageUrl
}: CreateExercise) => {

  const result = await pool.query(
    `
    Insert into Exercises(
    id,
    name,
    muscle_group,
    category,
    image_url
    )
    values (
    gen_random_uuid(),
    $1,
    $2,
    $3,
    $4
    )
    RETURNING
      id,
      name,
      muscle_group,
      category,
      image_url
    `,
    [name, muscleGroup, category, imageUrl ?? null]
  );

  const exercise = result.rows[0]
  return {
    exerciseId: exercise.id,
    name: exercise.name,
    muscleGroup: exercise.muscle_group,
    category: exercise.category,
    imageUrl: exercise.image_url
  };
}