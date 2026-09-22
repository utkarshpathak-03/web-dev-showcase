import pool from "../config/db";

export const getCurrentSplitData = async () => {
    const result = await pool.query(`
    SELECT
      w.id AS workout_id,
      w.date,
      w.category,
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