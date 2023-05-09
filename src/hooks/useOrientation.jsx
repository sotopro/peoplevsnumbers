import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useOrientation = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const statePortrait = () => {
    setIsPortrait(onPortrait);
  };

  useEffect(() => {
    const suscription = Dimensions.addEventListener('change', () => statePortrait);

    return () => suscription.remove();
  });

  return { isPortrait };
};

export default useOrientation;
