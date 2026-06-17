import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminFeedback from "./pages/AdminFeedback";
import AddProject from "./pages/AddProject";
import ManageProjects from "./pages/ManageProjects";
import EditProject from "./pages/EditProject";

import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute> } />
        
        <Route
  path="/add-project"
  element={
    <ProtectedRoute>
      <AddProject />
    </ProtectedRoute>
  }
/>

        <Route
  path="/manage-projects"
  element={
    <ProtectedRoute>
      <ManageProjects />
    </ProtectedRoute>
  }
/>

<Route
  path="/edit-project/:id"
  element={
    <ProtectedRoute>
      <EditProject />
    </ProtectedRoute>
  }
/>

<Route
  path="/edit-project/:id"
  element={
    <ProtectedRoute>
      <EditProject />
    </ProtectedRoute>
  }
/>

        <Route path="/admin-feedback"
element={
    <ProtectedRoute>
      <AdminFeedback />
    </ProtectedRoute>
  }
/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;