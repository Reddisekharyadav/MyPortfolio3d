import { useEffect } from 'react';

const ClickRipple = () => {
  useEffect(() => {
    const createRipple = (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'click-ripple';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      
      document.body.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    document.addEventListener('click', createRipple);

    return () => {
      document.removeEventListener('click', createRipple);
    };
  }, []);

  return null;
};

export default ClickRipple;
