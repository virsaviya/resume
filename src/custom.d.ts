declare module '*.svg' {
  import * as React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };
  const src: string; // Fallback for importing the raw source
  export default src;
}
