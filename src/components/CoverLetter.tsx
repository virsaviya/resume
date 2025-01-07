import React from 'react';

import { ReactComponent as Signature } from 'assets/Signature.svg';
import './CoverLetter.css';

export default function CoverLetter({ content }: { content: Array<string> }) {
  return (
    <div>
      {content.map((p, i) => (
        <p key={`cover-letter-${i}`}>{p}</p>
      ))}
      <p>Sincerely,</p>
      <Signature />
      <p>Virsaviya Efraim</p>
    </div>
  );
}
