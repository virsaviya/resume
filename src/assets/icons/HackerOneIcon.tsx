import React from 'react';

import { IconProps_t } from '.';

export function HackerOneIcon({
  size = 24,
  color = 'rgba(0, 0, 0, 1)',
}: IconProps_t): React.ReactElement {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      style={{ fill: color }}
      viewBox='0 0 512 512'>
      <path d='m174 56c-10 1-23 5-25 16v367c2 9 11 15 20 16h14c9-2 20-7 21-17a116708 116708 0 0 0 0-366c-3-11-15-15-25-16zm159 144c-7 1-13 2-17 5l-74 47c-4 3-5 8-5 12 2 12 8 21 17 27 7 4 18 7 25 2l29-19v165c3 10 12 15 21 17h10c9-2 19-5 23-14l1-3a18494 18494 0 0 0 0-222c-1-12-16-16-26-17z' />
    </svg>
  );
}
