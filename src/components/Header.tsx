import Icon from 'components/Icon';
import { Header_t } from 'types';

export default function Header({ content }: { content: Header_t }) {
  return (
    <header className='header section'>
      <h1>{content.name}</h1>
      <h3>{content.position}</h3>
    </header>
  );
}
