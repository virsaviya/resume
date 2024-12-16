import React from 'react';

import { History_t } from 'types';

export default function History({ content }: { content: Array<History_t> }) {
  return (
    <div className='timeline'>
      {content.map((item) => {
        return (
          <div className='timeline-event' key={item.id}>
            <div className='icon'>i</div>
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
