import React from 'react';

import Icon from 'components/Icon';
import { Experience_t } from 'types';
import { dateToRender } from 'utils';
import './History.css';

export default function History({ content }: { content: Array<Experience_t> }) {
  return (
    <div className='timeline'>
      {content.map((item) => {
        const date = dateToRender(item.startDate, item.endDate);

        return (
          <div className='timeline-event nudge' key={item.id}>
            <p className='date'>{date}</p>
            <Icon iconName={item.id} size={20} color='white' />
            <div className='vertical-line' />
            <Details title={item.organization} subtitle={item.position}>
              <div className='stack'>
                {item.stack?.map((lib) => (
                  <Icon key={lib} iconName={lib} />
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
  children,
}: {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) => (
  <div className='details'>
    <h3>{title}</h3>
    <p>{subtitle}</p>
    {children}
  </div>
);
