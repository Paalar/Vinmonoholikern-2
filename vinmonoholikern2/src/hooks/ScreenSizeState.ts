import { useState, useEffect } from 'react';
import { Screen } from '../interfaces/ScreenInterface';

const getScreenDimensions = (): Screen => ({
  height: window.innerHeight,
  width: window.innerWidth
});

const ScreenSizeState = (): Screen => {
  const [screenSize, setScreenSize] = useState(getScreenDimensions);

  useEffect((): (() => void) => {
    const handleResize = (): void => setScreenSize(getScreenDimensions);

    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}

export default ScreenSizeState;
