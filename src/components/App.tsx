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
  skills,
  strengths,
  summary,
} from 'content';
import { Experience_t } from 'types';
import { fetchData, parseSheetData } from 'utils';
import './App.css';

function App({ type }: { type: 'cover-letter' | 'resume' }) {
  const [experience, setExperience] =
    React.useState<Array<Experience_t> | null>(null);

  React.useEffect(() => {
    const getContent = async () => {
      const data = await fetchData();
      const content = parseSheetData(data);
      setExperience(content);
    };
    getContent();
  }, []);

  const isResume = type === 'resume';
  if (!experience) return <div>loading</div>;
  return (
    <div className='layout'>
      <Header content={header} contact={contact} />

      {isResume && (
        <Section title='Summary'>
          <p>{summary}</p>
        </Section>
      )}

      <Section sidebar title='History'>
        <History content={experience} />
      </Section>

      <Section sidebar title='Skills'>
        <Skills content={skills} />
      </Section>

      {isResume ? (
        <Section title='Experience'>
          {strengths.map((strength) => (
            <Strengths key={strength.id} strength={strength} />
          ))}
        </Section>
      ) : (
        <Section title='Cover-Letter' hidden>
          <CoverLetter content={coverLetter} />
        </Section>
      )}
    </div>
  );
}

export default App;
