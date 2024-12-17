import React from 'react';

import { IconProps_t } from '.';

export function WebpackIcon({
  size = 24,
  color = 'rgba(0, 0, 0, 1)',
}: IconProps_t): React.ReactElement {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 110.8 122.88'
      style={{ fill: color }}>
      <path
        fillOpacity={0.5}
        d='M107.39,94.71l-49.8,28.17V100.94l31-17.07L107.39,94.7Zm3.41-3.09V32.71L92.58,43.24V81.11L110.8,91.62ZM3.41,94.71l49.8,28.17V100.94l-31-17.07L3.41,94.71ZM0,91.62V32.71L18.22,43.24V81.11L0,91.62ZM2.14,28.89,53.21,0V21.2l-32.73,18-.26.14L2.14,28.89Zm106.52,0L57.59,0V21.2l32.73,18,.26.15,18.08-10.45Z'
      />
      <path d='M53.21,96,22.59,79.1V45.75L53.21,63.43V96Zm4.38,0L88.21,79.12V45.75L57.59,63.43V96Zm-32.93-54L55.4,25,86.14,41.9,55.4,59.64,24.66,41.9Z' />
    </svg>
  );
}
