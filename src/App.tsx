import React from 'react';

import Contact from 'components/Contact';
import Education from 'components/Education';
import Header from 'components/Header';
import History from 'components/History';
import Section from 'components/Section';
import Strengths from 'components/Strengths';
import Skills from 'components/Skills';
import {
  contact,
  education,
  header,
  history,
  skills,
  strengths,
  summary,
} from 'content';

function App() {
  return (
    <div className='layout'>
      <div className='placeholder' />
      <Header content={header} />

      <Section title='Contact' sidebar hidden>
        <Contact content={contact} />
      </Section>

      <Section title='Summary'>
        <p>{summary}</p>
      </Section>

      <Section sidebar title='Skills'>
        <Skills content={skills} />
      </Section>

      <Section sidebar title='History'>
        <History content={history} />
      </Section>

      <Section title='Experience'>
        {strengths.map((strength) => (
          <Strengths key={strength.id} strength={strength} />
        ))}
      </Section>

      <Section sidebar title='Education'>
        <Education content={education} />
      </Section>
    </div>
  );
}

export default App;
