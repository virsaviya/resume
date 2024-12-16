import React from 'react';

import Header from 'components/Header';
import Section from 'components/Section';
import { header, summary } from 'content';

function App() {
  return (
    <div className='grid layout'>
      <Header content={header} />
      <Section title='Summary'>
        <p>{summary}</p>
      </Section>
      <div className='section'>summary</div>
      <div className='section sidebar'>skills</div>
      <div className='section sidebar'>history</div>
      <div className='section'>experience</div>
      <div className='section sidebar'>education</div>
    </div>
  );
}

export default App;
