import React from 'react';

import Icon from 'components/Icon';
import { History_t } from 'types';
import { parseDate } from 'utils';

export default function History({ content }: { content: Array<History_t> }) {
  return (
    <div className='timeline'>
      {content.map((item) => {
        const date = item.endDate
          ? `${parseDate(item.startDate)} - ${parseDate(item.endDate)}`
          : parseDate(item.startDate);

        return (
          <div className='timeline-event' key={item.id}>
            <Icon className='icon' iconName={item.id} size={20} color='white' />
            <div className='deets'>
              <h3>{item.organization}</h3>
              <div>
                <p>{item.position}</p>
                <p>{date}</p>
              </div>
              <div className='stack'>
                {item.stack?.map((lib) => (
                  <Icon iconName={lib} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
