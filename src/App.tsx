import React from 'react';

import Education from 'components/Education';
import Header from 'components/Header';
import Section from 'components/Section';
import { education, header, summary } from 'content';

function App() {
  return (
    <div className='grid layout'>
      <Header content={header} />
      <Section title='Summary'>
        <p>{summary}</p>
      </Section>
      <div className='section sidebar'>skills</div>
      <div className='section sidebar'>history</div>
      <div className='section'>experience</div>
      <Section sidebar title='Education'>
        <Education content={education} />
      </Section>
    </div>
  );
}

export default App;
