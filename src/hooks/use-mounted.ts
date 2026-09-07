import { useEffect, useState } from "react";

/**
 * True only after the first client render. Use it to skip rendering
 * randomised/decorative output during SSR so hydration stays identical.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
