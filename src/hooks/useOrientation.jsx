import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from 'react';

export default function useOrientation() {
  const [screenOrientation, setScreenOrientation] = useState(
    ScreenOrientation.Orientation.PORTRAIT_UP
  );

  useEffect(() => {
    const onOrientationChange = (currentOrientation) => {
      const orientationValue = currentOrientation.orientationInfo.orientation;
      setScreenOrientation(orientationValue);
    };

    const initScreenOrientation = async () => {
      const currentOrientation = await ScreenOrientation.getOrientationAsync();
      setScreenOrientation(currentOrientation);
    };

    const screenOrientationListener =
      ScreenOrientation.addOrientationChangeListener(onOrientationChange);

    initScreenOrientation();
    return () => {
      ScreenOrientation.removeOrientationChangeListener(screenOrientationListener);
    };
  }, []);

  return screenOrientation === 3 || screenOrientation === 4 ? 'LANDSCAPE' : 'PORTRAIT';
}
