import { useState } from 'react';
import { User, Mail, Scale, Ruler, Target, Save, Check } from 'lucide-react';
import Alert from '../components/common/Alert';

function Settings() {
    // Initial user settings state
    const [formData, setFormData] = useState({
        name: 'Utkarsh Pathak',
        email: 'FatToFit@gmail.com',
        bodyWeight: 75,
        height: 178,
        goal: 'muscle_building'
    });

    const [isSaved, setIsSaved] = useState(false);

    // Alert state to control visibility, type, and message
    const [alert, setAlert] = useState({
        show: false,
        type: 'success',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const triggerAlert = (type, message) => {
        setAlert({ show: true, type, message });
        // Auto-dismiss alert after 3.5 seconds
        setTimeout(() => {
            setAlert((prev) => ({ ...prev, show: false }));
        }, 3500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation check for empty required fields
        if (!formData.name.trim() || !formData.email.trim()) {
            triggerAlert('error', 'Please fill out all required profile details.');
            return;
        }

        console.log('Saved Settings:', formData);

        // Success state and alert
        setIsSaved(true);
        triggerAlert('success', 'Data saved successfully');

        setTimeout(() => setIsSaved(false), 2500);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white border border-gray-200 rounded-xl shadow-sm text-slate-800 my-4 relative">

            {/* Custom Alert Integration */}
            {alert.show && (
                <div className="mb-6 ">
                    <Alert
                        type={alert.type}
                        message={alert.message}
                        onClose={() => setAlert((prev) => ({ ...prev, show: false }))}
                    />
                </div>
            )}

            {/* Page Title */}
            <div className="mb-6 border-b border-gray-100 pb-4">
                <h1 className="font-semibold text-xl text-slate-900">Account Settings</h1>
                <p className="text-sm text-slate-500">Manage your personal profile and fitness metrics</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Profile Information Section */}
                <div>
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                        Profile Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name Field */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Full Name
                            </label>
                            <div className="relative flex items-center">
                                <User className="absolute left-3 h-4 w-4 text-slate-400" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-200 rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-[#4C41CD] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Email Address
                            </label>
                            <div className="relative flex items-center">
                                <Mail className="absolute left-3 h-4 w-4 text-slate-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-200 rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-[#4C41CD] transition-colors"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Body Metrics & Goal Section */}
                <div>
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                        Fitness Metrics
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Bodyweight */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Weight (kg)
                            </label>
                            <div className="relative flex items-center">
                                <Scale className="absolute left-3 h-4 w-4 text-slate-400" />
                                <input
                                    type="number"
                                    name="bodyWeight"
                                    value={formData.bodyWeight}
                                    onChange={handleChange}
                                    className="w-full border border-gray-200 rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-[#4C41CD] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Height */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Height (cm)
                            </label>
                            <div className="relative flex items-center">
                                <Ruler className="absolute left-3 h-4 w-4 text-slate-400" />
                                <input
                                    type="number"
                                    name="height"
                                    value={formData.height}
                                    onChange={handleChange}
                                    className="w-full border border-gray-200 rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-[#4C41CD] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Primary Goal */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Fitness Goal
                            </label>
                            <div className="relative flex items-center">
                                <Target className="absolute left-3 h-4 w-4 text-slate-400 pointer-events-none" />
                                <select
                                    name="goal"
                                    value={formData.goal}
                                    onChange={handleChange}
                                    className="w-full border border-gray-200 rounded-lg py-2 pl-9 pr-3 text-sm bg-white focus:outline-none focus:border-[#4C41CD] transition-colors cursor-pointer"
                                >
                                    <option value="muscle_building">Muscle Building</option>
                                    <option value="fat_loss">Fat Loss</option>
                                    <option value="strength_training">Strength Training</option>
                                    <option value="maintenance">Maintenance</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end pt-4 border-t border-gray-100">
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-[#4C41CD] hover:bg-[#3d33aa] text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors shadow-sm cursor-pointer"
                    >
                        {isSaved ? (
                            <>
                                <Check className="h-4 w-4" />
                                <span>Saved!</span>
                            </>
                        ) : (
                            <>
                                <Save className="h-4 w-4" />
                                <span>Save Changes</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Settings;