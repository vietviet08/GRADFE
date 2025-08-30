'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook to prevent hydration mismatches
 * Returns true only after the component has mounted on the client
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
