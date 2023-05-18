import * as ScreenOrientation from 'expo-screen-orientation';
import { useState, useEffect } from 'react';

import { ORIENTATION_NUMBER } from '../constants';

const useOrientation = () => {
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

    initScreenOrientation();

    const screenOrientationListener =
      ScreenOrientation.addOrientationChangeListener(onOrientationChange);

    return () => {
      ScreenOrientation.removeOrientationChangeListener(screenOrientationListener);
    };
  }, []);

  return ORIENTATION_NUMBER[screenOrientation];
};

export default useOrientation;
