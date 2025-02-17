import React from 'react';

import Icon from 'components/Icon';
import List from 'components/List';
import { Experience_t } from 'types';
import { dateToRender } from 'utils';
import './Experience.css';

export default function Experience({ content }: { content: Experience_t }) {
  const date = dateToRender(content.startDate, content.endDate);
  const description =
    content.description === undefined ? undefined : content.description.length >
      1 ? (
      <List
        items={content.description as Array<string>}
        renderItem={(item: string) => item}
      />
    ) : (
      <div>{content.description}</div>
    );

  return (
    <div className='experience-item'>
      <div className='experience-item-header'>
        <div className='title'>
          {/* <Icon iconName={content.id} /> */}
          <h3>{content.organization}</h3>
          <span>{content.position}</span>
        </div>
        <p className='details'>
          <Icon iconName='calendar' label={date} size={16} />
          <Icon iconName='location' label={content.location} size={16} />
        </p>
      </div>
      {description}
    </div>
  );
}
