import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layouts/AppLayout';
import Dashboard from './pages/Dashboard';
import History from './pages/History.jsx';
import Settings from './pages/Settings.jsx';
import Workouts from './pages/Workouts.jsx';
import Exercises from './pages/Exercises.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="history" element={<History />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="settings" element={<Settings />} />
          <Route path="history" element={<History />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
