import { Routes, Route } from 'react-router-dom';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages
import HomePage from './pages/public/TrangChu';

// Auth Pages
import DangNhapPage from './pages/auth/DangNhapPage';
import DangKyPage from './pages/auth/DangKyPage';

// Admin Pages
import DashboardPage from './pages/admin/DashboardPage';
import AdminEmployeesPage from './pages/admin/AdminEmployeesPage';
import AdminCustomersPage from './pages/admin/AdminCustomersPage';
import AdminReportPage from './pages/admin/AdminReportPage';

import './assets/styles/App.css';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <Routes>
        {/* Public Routes with Layout */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* Auth Routes without Layout */}
        <Route path="/login" element={<DangNhapPage />} />
        <Route path="/register" element={<DangKyPage />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="employees" element={<AdminEmployeesPage />} />
          <Route path="customers" element={<AdminCustomersPage />} />
          <Route path="reports" element={<AdminReportPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
