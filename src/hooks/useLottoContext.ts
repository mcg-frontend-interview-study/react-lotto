import { useContext } from 'react';
import LottoContext from '../contexts/LottoContext';

function useLottoContext() {
  const context = useContext(LottoContext);

  if (!context) {
    throw new Error('useLottoContext must be used within a LottoProvider');
  }

  return context;
}

export default useLottoContext;
