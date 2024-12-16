import React from 'react';

import { Skills_t } from 'types';
import { capitalize } from 'utils';

export default function Skills({ content }: { content: Skills_t }) {
  return (
    <div className='flex flex-wrap'>
      {Object.keys(content).map((subsection) => {
        const name = capitalize(subsection);
        const skills = content[subsection as keyof Skills_t];
        return (
          <div className='subsection'>
            <h3>{name}</h3>
            <ul>
              {skills.map(
                (s): React.ReactElement => (
                  <li key={s}>{s}</li>
                ),
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
