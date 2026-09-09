import { ArrowLeft, Trash2 } from 'lucide-react';
import { useState, ChangeEvent } from 'react';
import { currentWorkoutData } from '../data/workoutData';
import { useNavigate } from 'react-router-dom';

interface Exercises {
    id: string;
    exercise: string;
    img: string
    sets: number
    reps: number
    weight: number
}
interface CurrentWorkoutData {
    id: string;
    workoutName: string;
    exercises: Exercises[]
}
function Workouts() {

    const navigate = useNavigate();
    const [workoutData, setWorkoutData] = useState<CurrentWorkoutData>(currentWorkoutData);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWorkoutData((prev) => ({
            ...prev,
            workoutName: e.target.value
        }));
    };

    const handleExerciseChange = (id: string, field: keyof Exercises, value: number) => {
        setWorkoutData((prev) => ({
            ...prev,
            exercises: prev.exercises.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        }));
    };

    const handleDeleteExercise = (id: string) => {
        setWorkoutData((prev) => ({
            ...prev,
            exercises: prev.exercises.filter((item) => item.id !== id)
        }));
    };
    const handleBack = () => {
        navigate('/')
    }

    const saveWorkout = () => {
        sessionStorage.setItem('message', 'Workout saved successfully');

        navigate('/', {
            state: {
                message: "Workout saved successfully"
            }
        })
    }
    return (
        <div className="flex flex-col border border-[#EFEFEF] rounded-xl bg-white overflow-y-auto max-h-150 p-6 shadow-sm max-w-4xl mx-auto text-slate-800">
            <div className="flex items-center gap-3 mb-1">
                <div className="h-6 w-6 cursor-pointer flex items-center justify-center" onClick={handleBack}>
                    <ArrowLeft className="h-5 w-5 text-slate-600 hover:text-slate-900" />
                </div>
                <h1 className="font-semibold text-xl">Edit Workout</h1>
            </div>
            <h2 className="text-sm text-slate-500 mb-6 pl-9">Modify your workout details below</h2>

            <div className="flex flex-col gap-4">
                <div>
                    <span className="text-xs font-semibold text-slate-700 block mb-1">Workout Name</span>
                    <input
                        type="text"
                        value={workoutData.workoutName}
                        onChange={handleNameChange}
                        className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="e.g. Push Day"
                    />
                </div>

                <div>
                    <span className="text-xs font-semibold text-slate-700 block mb-3">Exercises</span>
                    <div className="flex flex-col gap-3">
                        {workoutData.exercises.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between border border-slate-100 rounded-lg p-3 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                            >
                                <div className="flex items-center gap-3 min-w-40">
                                    <img
                                        src={item.img}
                                        alt={item.exercise}
                                        className="h-12 w-12 rounded-md object-cover bg-slate-200"
                                    />
                                    <span className="font-medium text-sm text-slate-800">{item.exercise}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] text-slate-500 font-medium">Sets</span>
                                        <input
                                            type="number"
                                            value={item.sets}
                                            onChange={(e) => handleExerciseChange(item.id, 'sets', Number(e.target.value))}
                                            className="w-12 border border-slate-200 rounded-md p-1 text-center text-sm bg-white focus:outline-none focus:border-purple-500"
                                        />
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] text-slate-500 font-medium">Reps</span>
                                        <input
                                            type="number"
                                            value={item.reps}
                                            onChange={(e) => handleExerciseChange(item.id, 'reps', Number(e.target.value))}
                                            className="w-12 border border-slate-200 rounded-md p-1 text-center text-sm bg-white focus:outline-none focus:border-purple-500"
                                        />
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] text-slate-500 font-medium">Weight (kg)</span>
                                        <input
                                            type="number"
                                            value={item.weight}
                                            onChange={(e) => handleExerciseChange(item.id, 'weight', Number(e.target.value))}
                                            className="w-14 border border-slate-200 rounded-md p-1 text-center text-sm bg-white focus:outline-none focus:border-purple-500"
                                        />
                                    </div>

                                    {/* Delete Icon */}
                                    <button
                                        type="button"
                                        onClick={() => handleDeleteExercise(item.id)}
                                        className="p-1.5 text-slate-400 hover:text-red-500 transition-colors rounded-md"
                                        title="Delete exercise"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div onClick={saveWorkout} className='flex items-center justify-center bg-[#4C41CC] text-white rounded-md border border-slate-200 text-xs h-10 mt-6'>
                            <span>Save Workout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Workouts;