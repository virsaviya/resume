import React from 'react';

import { IconProps_t } from '.';

export function SigmaIcon({
  size = 24,
  color = 'rgba(0, 0, 0, 1)',
}: IconProps_t): React.ReactElement {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      style={{ fill: color }}
      viewBox='0 0 78 68'>
      <polygon points='58.0882353 67.304902 20.7181373 51.0789216 44.8828431 51.0789216' />
      <polygon points='34.8529412 34.5431373 61.3411765 66.995098 50.8078431 17.5039216' />
      <polygon points='0 0 32.9553922 32.6455882 48.9102941 15.6063725' />
      <polygon points='63.4323529 0.348529412 51.0789216 13.5539216 39.1901961 9.72009804' />
      <polygon points='66.0656863 1.47156863 59.0563725 8.59705882 78.1480392 8.90686275' />
    </svg>
  );
}
