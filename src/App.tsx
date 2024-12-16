import React from 'react';

import Education from 'components/Education';
import Header from 'components/Header';
import Section from 'components/Section';
import Strengths from 'components/Strengths';
import Skills from 'components/Skills';
import { education, header, skills, strengths, summary } from 'content';

function App() {
  return (
    <div className='grid layout'>
      <Header content={header} />

      <Section title='Summary'>
        <p>{summary}</p>
      </Section>

      <Section sidebar title='Skills'>
        <Skills content={skills} />
      </Section>

      <div className='section sidebar'>history</div>

      <Section title='Experience'>
        <Strengths content={strengths} />
      </Section>

      <Section sidebar title='Education'>
        <Education content={education} />
      </Section>
    </div>
  );
}

export default App;
