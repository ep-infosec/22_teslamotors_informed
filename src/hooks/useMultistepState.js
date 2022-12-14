import { useContext } from 'react';
import { MultistepStateContext } from '../Context';

function useMultistepState() {
  return useContext(MultistepStateContext);
}

export { useMultistepState };
