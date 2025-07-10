import React, { createContext, useContext, useState, useEffect } from 'react';

interface EditableContent {
  id: string;
  type: 'text' | 'image' | 'gallery';
  content: any;
  lastModified: Date;
}

interface AdminContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  updateContent: (id: string, content: any) => void;
  getContent: (id: string) => any;
  isAdmin: boolean;
  setAdminMode: (enabled: boolean) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [content, setContent] = useState<Record<string, EditableContent>>({});

  // Load content from localStorage
  useEffect(() => {
    const savedContent = localStorage.getItem('underground-content');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
    
    // Check for admin mode (simple check - enhance with proper auth later)
    const adminMode = localStorage.getItem('underground-admin') === 'true';
    setIsAdmin(adminMode);
  }, []);

  const toggleEditMode = () => {
    if (isAdmin) {
      setIsEditMode(!isEditMode);
    }
  };

  const updateContent = (id: string, newContent: any) => {
    const updatedContent: Record<string, EditableContent> = {
      ...content,
      [id]: {
        id,
        type: 'text', // Default type
        content: newContent,
        lastModified: new Date(),
      },
    };
    setContent(updatedContent);
    localStorage.setItem('underground-content', JSON.stringify(updatedContent));
  };

  const getContent = (id: string) => {
    return content[id]?.content || null;
  };

  const setAdminMode = (enabled: boolean) => {
    setIsAdmin(enabled);
    localStorage.setItem('underground-admin', enabled.toString());
    if (!enabled) {
      setIsEditMode(false);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        isEditMode,
        toggleEditMode,
        updateContent,
        getContent,
        isAdmin,
        setAdminMode,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};