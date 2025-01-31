import React from 'react';

import { ReactComponent as Default } from 'assets/icons/Default.svg';
import { IconProps_t, IconName_t, iconMap } from 'assets/icons';
import { capitalize } from 'utils';

export default function Icon({
  iconName,
  className = '',
  size = 24,
  label,
  labelLeft = false,
  ...rest
}: IconProps_t & {
  iconName: IconName_t;
  label?: string;
  labelLeft?: boolean;
}): React.ReactElement | null {
  const IconToRender = iconMap[capitalize(iconName)] || Default;
  const props = {
    ...rest,
    width: size,
    height: size,
    role: 'img',
    'aria-label': `${capitalize(iconName)}-icon`,
    style:
      label && labelLeft
        ? { marginLeft: 'var(--spacing-words)' }
        : label && !labelLeft
        ? { marginRight: 'var(--spacing-words)' }
        : {},
  };
  return (
    <div className={`icon nudge ${className}`}>
      {label && labelLeft && <p>{label}</p>}
      <IconToRender {...props} />
      {label && !labelLeft && <p>{label}</p>}
    </div>
  );
}
