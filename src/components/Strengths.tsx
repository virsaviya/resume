import React from 'react';

import List from 'components/List';

import { Strength_t } from 'types';

export default function Strengths({ strength }: { strength: Strength_t }) {
  return (
    <div>
      <h3>{strength.name}</h3>
      <List
        items={strength.points as Array<string>}
        renderItem={(item: string) => item}
      />
    </div>
  );
}
