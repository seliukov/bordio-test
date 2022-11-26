import { useState, useEffect } from 'react';

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
        document.body.clientWidth <= 428
    );
  }, []);

  return isMobile;
};

export default useMobile;
