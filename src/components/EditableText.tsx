import React, { useState, useRef, useEffect } from 'react';
import { useAdmin } from '../contexts/AdminContext';

interface EditableTextProps {
  id: string;
  defaultContent: string;
  className?: string;
  placeholder?: string;
  multiline?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const EditableText: React.FC<EditableTextProps> = ({
  id,
  defaultContent,
  className = '',
  placeholder = 'Click to edit...',
  multiline = false,
  tag = 'p',
}) => {
  const { isEditMode, getContent, updateContent } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [tempContent, setTempContent] = useState('');
  const textRef = useRef<any>(null);

  const currentContent = getContent(id) || defaultContent;

  useEffect(() => {
    setTempContent(currentContent);
  }, [currentContent]);

  const handleClick = () => {
    if (isEditMode && !isEditing) {
      setIsEditing(true);
      setTempContent(currentContent);
    }
  };

  const handleSave = () => {
    updateContent(id, tempContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempContent(currentContent);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const commonProps = {
    className: `${className} ${isEditMode ? 'cursor-pointer' : ''} ${isEditing ? 'bg-bg-secondary p-2 rounded' : ''}`,
    onClick: handleClick,
  };

  if (isEditing) {
    return (
      <div className="relative">
        {multiline ? (
          <textarea
            value={tempContent}
            onChange={(e) => setTempContent(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className={`${className} bg-bg-secondary text-text-primary p-2 rounded border border-accent-primary w-full resize-none`}
            placeholder={placeholder}
            autoFocus
          />
        ) : (
          <input
            type="text"
            value={tempContent}
            onChange={(e) => setTempContent(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className={`${className} bg-bg-secondary text-text-primary p-2 rounded border border-accent-primary w-full`}
            placeholder={placeholder}
            autoFocus
          />
        )}
        <div className="absolute -bottom-8 left-0 text-xs text-accent-primary">
          Press Enter to save, Esc to cancel
        </div>
      </div>
    );
  }

  const Tag = tag;
  return (
    <Tag {...commonProps} ref={textRef}>
      {currentContent || placeholder}
      {isEditMode && (
        <span className="ml-2 text-accent-primary text-sm opacity-70">✏️</span>
      )}
    </Tag>
  );
};