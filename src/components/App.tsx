import React from 'react';

import CoverLetter from 'components/CoverLetter';
import Header from 'components/Header';
import History from 'components/History';
import Section from 'components/Section';
import Strengths from 'components/Strengths';
import Skills from 'components/Skills';
import {
  contact,
  coverLetter,
  header,
  history,
  skills,
  strengths,
  summary,
} from 'content';
import './App.css';

function App({ type }: { type: 'cover-letter' | 'resume' }) {
  if (type === 'cover-letter')
    return (
      <div className='layout'>
        <Header content={header} contact={contact} />

        <Section title='Cover Letter' hidden>
          <CoverLetter content={coverLetter} />
        </Section>
      </div>
    );
  else
    return (
      <div className='layout'>
        <Header content={header} contact={contact} />

        <Section title='Summary' hidden>
          <p>{summary}</p>
        </Section>

        <Section sidebar title='History'>
          <History content={history} />
        </Section>

        <Section sidebar title='Skills'>
          <Skills content={skills} />
        </Section>

        <Section title='Experience'>
          {strengths.map((strength) => (
            <Strengths key={strength.id} strength={strength} />
          ))}
        </Section>
      </div>
    );
}

export default App;
