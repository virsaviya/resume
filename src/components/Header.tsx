import Icon from 'components/Icon';
import { Header_t } from 'types';

export default function Header({ content }: { content: Header_t }) {
  return (
    <header className='header'>
      <div className='section'>
        <h1>{content.name}</h1>
        <h3>{content.position}</h3>
      </div>
      <div className='section sidebar'>
        <div>
          <Icon iconName='Location' size={16} />
          <p>{content.location}</p>
        </div>
        <div>
          <Icon iconName='Phone' size={16} />
          <p>{content.phone}</p>
        </div>
        <div>
          <Icon iconName='Gmail' size={16} />
          <p>{content.email}</p>
        </div>
        <div>
          <Icon iconName='Github' size={16} />
          <p>{content.github}</p>
        </div>
        <div>
          <Icon iconName='Linkedin' size={16} />
          <p>{content.linkedin}</p>
        </div>
      </div>
    </header>
  );
}
