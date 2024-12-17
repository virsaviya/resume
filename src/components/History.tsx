import React from 'react';

import Icon from 'components/Icon';
import { History_t } from 'types';
import { capitalize } from 'utils';

export default function History({ content }: { content: Array<History_t> }) {
  return (
    <div className='timeline'>
      {content.map((item) => {
        return (
          <div className='timeline-event' key={item.id}>
            <Icon
              className='icon'
              iconName={capitalize(item.id) || 'Default'}
              size={20}
              color='white'
            />
            <div>{item.organization}</div>
            <div>{item.position}</div>
            <div>2018 - 2020</div>
            <div>stack here</div>
          </div>
        );
      })}
    </div>
  );
}
