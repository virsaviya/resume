import { Header_t } from 'types';

export default function Header({ content }: { content: Header_t }) {
  return (
    <header className='header section'>
      <h1>
        <span className='first'>{content.firstName}</span>{' '}
        <span className='last'>{content.lastName}</span>
      </h1>
      <h3>{content.position}</h3>
    </header>
  );
}
