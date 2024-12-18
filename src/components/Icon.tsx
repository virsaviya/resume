import React from 'react';

import { ReactComponent as Default } from 'assets/icons/Default.svg';
import { IconProps_t, IconName_t, iconMap } from 'assets/icons';
import { capitalize } from 'utils';

export default function Icon({
  iconName,
  className,
  size = 24,
  ...rest
}: IconProps_t & {
  iconName: IconName_t;
}): React.ReactElement | null {
  const IconToRender = iconMap[capitalize(iconName)] || Default;
  const props = {
    ...rest,
    width: size,
    height: size,
    role: 'img',
    'aria-label': capitalize(iconName),
  };
  return (
    <div className={className}>
      <IconToRender {...props} />
    </div>
  );
}
