import React from 'react';

import List from 'components/List';

import { Strength_t } from 'types';

export default function Strengths({ content }: { content: Array<Strength_t> }) {
  return (
    <div>
      {content.map((strength) => {
        return (
          <div>
            <h3>{strength.name}</h3>
            <List
              items={strength.points as Array<string>}
              renderItem={(item: string) => item}
            />
          </div>
        );
      })}
    </div>
  );
}
