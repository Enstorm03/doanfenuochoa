import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <header className="flex h-14 items-center justify-end border-b bg-surface-light dark:bg-surface-dark px-4 lg:h-[60px] lg:px-6">
      
      <Link 
        to="/" 
        title="Quay về trang chủ"
        className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
      >
        <span className="material-symbols-outlined">home</span>
      </Link>

    </header>
  );
};

export default AdminHeader;