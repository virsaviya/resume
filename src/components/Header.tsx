import { Header_t } from 'types';

export default function Header({ content }: { content: Header_t }) {
  return (
    <header className='header'>
      <div className='section'>
        <h1>{content.name}</h1>
        <h3>{content.position}</h3>
      </div>
      <div className='section sidebar'>
        <p> {content.location}</p>
        <p>{content.phone}</p>
        <p>{content.email}</p>
      </div>
    </header>
  );
}
