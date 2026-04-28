// import './App.css'
// import ProgressTracker from './components/ProgressTracker'
// import TaskForm from './components/TaskForm'
// import TaskList from './components/TaskList'

// function App() {

//   return (
//     <div>
//       <h1>DoneZo -- A Task Manager Tool</h1>
//       <p><i>Where tasks meet precision and completion becomes measurable.</i></p>
//       <TaskList/>
//       <TaskForm/>
//       <ProgressTracker/>x
//     </div>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { TaskProvider } from "./context/TaskContext"; // ✅ FIXED

import Tasks from "./components/pages/Tasks";
import Projects from "./components/pages/Projects";
import Calendar from "./components/pages/Calendar";
import Analytics from "./components/pages/Analytics";
import Settings from "./components/pages/Settings";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="projects" element={<Projects />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;