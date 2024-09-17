import { useEffect } from 'react';

export default ({ onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed z-50 inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      {children}
    </div>
  );
};
