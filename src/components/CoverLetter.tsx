import React from 'react';

import { ReactComponent as Signature } from 'assets/Signature.svg';

export default function CoverLetter({ content }: { content: Array<string> }) {
  return (
    <div className='cover-letter'>
      {content.map((p, i) => (
        <p key={`cover-letter-${i}`}>{p}</p>
      ))}
      <p>Sincerely,</p>
      <Signature />
      <p>Virsaviya Efraim</p>
    </div>
  );
}
