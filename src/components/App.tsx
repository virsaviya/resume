import React from 'react';

import CoverLetter from 'components/CoverLetter';
import Experience from 'components/Experience';
import Header from 'components/Header';
import History from 'components/History';
import Layout from 'components/Layout';
import Section from 'components/Section';
import Skills from 'components/Skills';
import { contact, coverLetter, header, skills, summary } from 'content';
import { Experience_t } from 'types';
import { fetchData, parseSheetData } from 'utils';

import './App.css';

function App({ type }: { type: 'cover-letter' | 'resume' }) {
  const [experience, setExperience] =
    React.useState<Array<Experience_t> | null>(null);
  const [history, setHistory] = React.useState<Array<Experience_t> | null>(
    null,
  );

  React.useEffect(() => {
    const getContent = async () => {
      const data = await fetchData();
      const content = parseSheetData(data);
      setExperience(
        content
          .filter((c) => c.expOrder >= 0)
          .sort((a, b) => a.expOrder - b.expOrder),
      );
      setHistory(
        content
          .filter((c) => c.histOrder >= 0)
          .sort((a, b) => a.histOrder - b.histOrder),
      );
    };
    getContent();
  }, []);

  if (!experience || !history) return <div>loading</div>;

  const isResume = type === 'resume';
  const summarySection = Array.isArray(summary) ? (
    <Section title='Summary'>
      {summary.map((s) => (
        <p>{s}</p>
      ))}
    </Section>
  ) : (
    <Section title='Summary'>
      <p>{summary}</p>
    </Section>
  );
  return (
    <Layout
      header={<Header content={header} contact={contact} />}
      footer={<div className='footer' />}>
      <div className='sidebar'>
        <Section title='History'>
          <History content={history} />
        </Section>
        <Section title='Skills'>
          <Skills content={skills} />
        </Section>
      </div>
      <div className='main'>
        {summarySection}
        {isResume ? (
          <Section title='Experience'>
            {experience.map((exp) => (
              <Experience key={exp.id} content={exp} />
            ))}
          </Section>
        ) : (
          <Section title='Cover-Letter' hidden>
            <CoverLetter content={coverLetter} />
          </Section>
        )}
      </div>
    </Layout>
  );
}

export default App;
