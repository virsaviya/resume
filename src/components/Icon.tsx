import React from 'react';

import { IconProps_t, IconName_t, iconMap } from 'assets/icons';

export default function Icon({
  iconName,
  className,
  ...rest
}: IconProps_t & {
  iconName: IconName_t;
}): React.ReactElement | null {
  const IconToRender = iconMap[iconName];
  const props = {
    ...rest,
    width: rest.size,
    height: rest.size,
  };
  return (
    <div className={className}>
      <IconToRender {...props} />
    </div>
  );
}
