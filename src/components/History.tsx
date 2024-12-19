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
          <div className='timeline-event nudge' key={item.id}>
            <Icon iconName={item.id} size={20} color='white' />
            <div className='vertical-line' />
            <Details
              title={item.organization}
              subtitle={item.position}
              date={date}>
              <div className='stack'>
                {item.stack?.map((lib) => (
                  <Icon iconName={lib} />
                ))}
              </div>
            </Details>
          </div>
        );
      })}
    </div>
  );
}

const Details = ({
  title,
  subtitle,
  date,
  children,
}: {
  title: string;
  subtitle: string;
  date: string;
  children?: React.ReactNode;
}) => (
  <div className='details'>
    <p>{title}</p>
    <p>{date}</p>
    <p>{subtitle}</p>
    {children}
  </div>
);
