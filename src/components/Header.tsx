import Icon from 'components/Icon';
import { Contact_t, Header_t } from 'types';
import { capitalize } from 'utils';

export default function Header({
  content,
  contact,
}: {
  content: Header_t;
  contact: Contact_t;
}) {
  return (
    <header className='header section'>
      <h1>
        <span className='first'>{content.firstName}</span>{' '}
        <span className='last'>{content.lastName}</span>
      </h1>
      <h3>{content.position}</h3>
      <div className='contact'>
        {(Object.keys(contact) as Array<keyof Contact_t>).map(
          (key: keyof Contact_t) => (
            <Icon
              key={key}
              className='contact-item'
              iconName={capitalize(key)}
              size={12}
              label={contact[key]}
            />
          ),
        )}
      </div>
    </header>
  );
}
