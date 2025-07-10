import React, { useState } from 'react';
import { Settings, Edit, EyeOff } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAdmin } from '../contexts/AdminContext';

export const AdminPanel: React.FC = () => {
  const { currentTheme, setTheme, availableThemes } = useTheme();
  const { isEditMode, toggleEditMode, isAdmin, setAdminMode } = useAdmin();
  const [isOpen, setIsOpen] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');

  const handleAdminLogin = () => {
    // Simple password check - replace with proper authentication
    if (adminPassword === 'underground666') {
      setAdminMode(true);
      setShowAdminLogin(false);
      setAdminPassword('');
    } else {
      alert('Invalid password');
    }
  };

  if (!isAdmin && !showAdminLogin) {
    return (
      <button
        onClick={() => setShowAdminLogin(true)}
        className="fixed bottom-4 right-4 bg-bg-secondary p-2 rounded-full shadow-lg z-50 opacity-30 hover:opacity-100 transition-opacity"
      >
        <Settings className="w-4 h-4 text-text-primary" />
      </button>
    );
  }

  if (showAdminLogin) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-bg-secondary p-6 rounded-lg">
          <h3 className="text-text-primary mb-4">Admin Access</h3>
          <input
            type="password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdminLogin()}
            placeholder="Enter admin password"
            className="w-full p-2 mb-4 bg-bg-primary text-text-primary rounded"
          />
          <div className="flex gap-2">
            <button
              onClick={handleAdminLogin}
              className="bg-accent-primary text-white px-4 py-2 rounded"
            >
              Login
            </button>
            <button
              onClick={() => setShowAdminLogin(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="bg-bg-secondary border border-accent-primary rounded-lg p-4 mb-2 shadow-xl">
          <h3 className="text-text-primary font-bold mb-3">Admin Panel</h3>
          
          {/* Edit Mode Toggle */}
          <div className="mb-4">
            <button
              onClick={toggleEditMode}
              className={`flex items-center gap-2 px-3 py-2 rounded ${
                isEditMode 
                  ? 'bg-accent-primary text-white' 
                  : 'bg-bg-primary text-text-primary'
              }`}
            >
              {isEditMode ? <EyeOff className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
              {isEditMode ? 'Exit Edit Mode' : 'Edit Content'}
            </button>
          </div>

          {/* Theme Selection */}
          <div className="mb-4">
            <label className="text-text-primary text-sm mb-2 block">Theme Variant:</label>
            <select
              value={currentTheme.variant}
              onChange={(e) => setTheme(e.target.value as any)}
              className="w-full bg-bg-primary text-text-primary p-2 rounded border border-accent-primary"
            >
              {availableThemes.map((theme) => (
                <option key={theme} value={theme}>
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Admin Logout */}
          <button
            onClick={() => setAdminMode(false)}
            className="w-full bg-red-600 text-white px-3 py-2 rounded text-sm"
          >
            Logout Admin
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-accent-primary p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <Settings className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};