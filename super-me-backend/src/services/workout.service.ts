import pool from "../config/db";

interface CreateCurrentSplit {
  category: string;
  date: string;
  duration: number;
  exercises: {
    exerciseId: string;
    sets: number;
    reps: number;
    weight: number;
  }[];
}

interface UpdateCurrentSplit {
  category: string;
  date: string;
  duration: number;
  exercises: {
    exerciseId: string;
    sets: number;
    reps: number;
    weight: number;
  }[];
}

export const getCurrentSplitData = async () => {
  const result = await pool.query(`
    SELECT
      w.id AS workout_id,
      w.date,
      w.category,
      w.duration
      e.id AS exercise_id,
      e.name,
      e.muscle_group,
      e.image_url,
      we.sets,
      we.reps,
      we.weight
    FROM workouts w
    JOIN workout_exercises we
      ON w.id = we.workout_id
    JOIN exercises e
      ON e.id = we.exercise_id
    WHERE w.date = CURRENT_DATE
    ORDER BY we.id
  `);

  if (result.rows.length === 0) {
    return null;
  }

  const workout = result.rows[0];

  return {
    id: workout.workout_id,
    category: workout.category,
    date: workout.date,
    duration: workout.duration,
    exercises: result.rows.map((exercise) => ({
      exerciseId: exercise.exercise_id,
      name: exercise.name,
      muscleGroup: exercise.muscle_group,
      imageUrl: exercise.image_url,
      sets: exercise.sets,
      reps: exercise.reps,
      weight: exercise.weight
    }))
  };
};


export const createCurrentSplitData = async ({
  category,
  date,
  duration,
  exercises
}: CreateCurrentSplit) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    // 1. Create workout
    const workoutResult = await client.query(
      `
      INSERT INTO workouts (
        id,
        user_id,
        date,
        category,
        duration
      )
      VALUES (
        gen_random_uuid(),
        '753c8de4-93f8-4f90-af51-ff0248fb70a9',
        $1,
        $2,
        $3
      )
      RETURNING id, date, category, duration
      `,
      [date, category, duration]
    );

    const workout = workoutResult.rows[0];

    // 2. Add exercises to workout
    for (const exercise of exercises) {
      await client.query(
        `
        INSERT INTO workout_exercises (
          id,
          workout_id,
          exercise_id,
          sets,
          reps,
          weight
        )
        VALUES (
          gen_random_uuid(),
          $1,
          $2,
          $3,
          $4,
          $5
        )
        `,
        [
          workout.id,
          exercise.exerciseId,
          exercise.sets,
          exercise.reps,
          exercise.weight
        ]
      );
    }

    await client.query("COMMIT");

    // 3. Fetch the complete workout
    const result = await client.query(
      `
      SELECT
        w.id AS workout_id,
        w.date,
        w.category,
        w.duration,
        e.id AS exercise_id,
        e.name,
        e.muscle_group,
        e.image_url,
        we.sets,
        we.reps,
        we.weight
      FROM workouts w
      JOIN workout_exercises we
        ON w.id = we.workout_id
      JOIN exercises e
        ON e.id = we.exercise_id
      WHERE w.id = $1
      ORDER BY we.id
      `,
      [workout.id]
    );

    return {
      id: workout.id,
      category: workout.category,
      date: workout.date,
      duration: workout.duration,
      exercises: result.rows.map((exercise) => ({
        exerciseId: exercise.exercise_id,
        name: exercise.name,
        muscleGroup: exercise.muscle_group,
        imageUrl: exercise.image_url,
        sets: exercise.sets,
        reps: exercise.reps,
        weight: exercise.weight
      }))
    };

  } catch (error) {
    await client.query("ROLLBACK");
    throw error;

  } finally {
    client.release();
  }
};


export const updateCurrentSplitData = async ({
  category,
  date,
  duration,
  exercises
}: UpdateCurrentSplit) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    // 1. Find today's workout
    const workoutResult = await client.query(
      `
      SELECT id
      FROM workouts
      WHERE user_id = $1
        AND date = CURRENT_DATE
      LIMIT 1
      `,
      ["753c8de4-93f8-4f90-af51-ff0248fb70a9"]
    );

    if (workoutResult.rows.length === 0) {
      await client.query("ROLLBACK");
      return null;
    }

    const workoutId = workoutResult.rows[0].id;

    // 2. Update workout
    await client.query(
      `
      UPDATE workouts
      SET
        category = $1,
        date = $2,
        duration = $3
      WHERE id = $4
      `,
      [category, date, duration, workoutId]
    );

    // 3. Remove existing exercises
    await client.query(
      `
      DELETE FROM workout_exercises
      WHERE workout_id = $1
      `,
      [workoutId]
    );

    // 4. Insert the new exercise state
    for (const exercise of exercises) {
      await client.query(
        `
        INSERT INTO workout_exercises (
          id,
          workout_id,
          exercise_id,
          sets,
          reps,
          weight
        )
        VALUES (
          gen_random_uuid(),
          $1,
          $2,
          $3,
          $4,
          $5
        )
        `,
        [
          workoutId,
          exercise.exerciseId,
          exercise.sets,
          exercise.reps,
          exercise.weight
        ]
      );
    }

    await client.query("COMMIT");

    // 5. Fetch updated workout
    const result = await client.query(
      `
      SELECT
        w.id AS workout_id,
        w.date,
        w.category,
        w.duration,
        e.id AS exercise_id,
        e.name,
        e.muscle_group,
        e.image_url,
        we.sets,
        we.reps,
        we.weight
      FROM workouts w
      JOIN workout_exercises we
        ON w.id = we.workout_id
      JOIN exercises e
        ON e.id = we.exercise_id
      WHERE w.id = $1
      ORDER BY we.id
      `,
      [workoutId]
    );

    return {
      id: workoutId,
      category: result.rows[0].category,
      date: result.rows[0].date,
      duration: result.rows[0].duration,
      exercises: result.rows.map((exercise) => ({
        exerciseId: exercise.exercise_id,
        name: exercise.name,
        muscleGroup: exercise.muscle_group,
        imageUrl: exercise.image_url,
        sets: exercise.sets,
        reps: exercise.reps,
        weight: exercise.weight
      }))
    };

  } catch (error) {
    await client.query("ROLLBACK");
    throw error;

  } finally {
    client.release();
  }
};




