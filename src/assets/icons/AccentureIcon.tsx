import React from 'react';

import { IconProps_t } from '.';

export function AccentureIcon({
  size = 24,
  color = 'rgba(0, 0, 0, 1)',
}: IconProps_t): React.ReactElement {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      style={{ fill: color }}
      viewBox='0 0 24 24'>
      <path d='M23.297 14.74.434 24v-5.263L16.8 12.11l6.497 2.631zm.27-5.371L.433 0v5.263l23.132 9.368V9.37z' />
    </svg>
  );
}
