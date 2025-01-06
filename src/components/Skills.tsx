import React from 'react';

import Icon from 'components/Icon';
import { Skills_t } from 'types';

export default function Skills({ content }: { content: Skills_t }) {
  return (
    <div>
      {/* this subsection renders icons while the others don't */}
      <div className='subsection libs'>
        <h3>Frameworks & Libraries</h3>
        <ul>
          {content.libraries.map(
            (s): React.ReactElement => (
              <li key={s}>
                <Icon iconName={s} />
              </li>
            ),
          )}
        </ul>
      </div>

      <div className='subsection'>
        <h3>Methodologies</h3>
        <ul>
          {content.methodologies.map(
            (s): React.ReactElement => (
              <li key={s}>{s}</li>
            ),
          )}
        </ul>
      </div>

      <div className='subsection'>
        <h3>Design</h3>
        <ul>
          {content.design.map(
            (s): React.ReactElement => (
              <li key={s}>{s}</li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
