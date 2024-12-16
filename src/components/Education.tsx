import { Education_t } from 'types';
import { parseDate } from 'utils';

export default function Education({ content }: { content: Education_t }) {
  const date = content?.endDate
    ? `${parseDate(content.startDate)} - ${parseDate(content.endDate)}`
    : `${parseDate(content.startDate)}`;

  return (
    <div>
      <p>{content.institution}</p>
      <p>{content.degree}</p>
      <p>{date}</p>
    </div>
  );
}
