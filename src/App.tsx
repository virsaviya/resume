import React from 'react';

import Contact from 'components/Contact';
import Header from 'components/Header';
import History from 'components/History';
import Section from 'components/Section';
import Strengths from 'components/Strengths';
import Skills from 'components/Skills';
import { contact, header, history, skills, strengths, summary } from 'content';

function App() {
  return (
    <div className='layout'>
      <Header content={header} />

      <Section sidebar title='Contact' hidden>
        <Contact content={contact} />
      </Section>

      <Section title='Summary' hidden>
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
    </div>
  );
}

export default App;
