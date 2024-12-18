import Icon from 'components/Icon';
import { Contact_t } from 'types';
import { capitalize } from 'utils';

export default function Contact({ content }: { content: Contact_t }) {
  return (
    <div>
      {(Object.keys(content) as Array<keyof Contact_t>).map(
        (key: keyof Contact_t) => (
          <Icon
            className='contact-item'
            iconName={capitalize(key)}
            size={16}
            label={content[key]}
          />
        ),
      )}
    </div>
  );
}
