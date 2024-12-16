import { Education_t } from 'types';
import { parseDate } from 'utils';

export default function Education({ content }: { content: Education_t }) {
  const date = content?.endDate
    ? `${parseDate(content.startDate)} - ${parseDate(content.endDate)}`
    : `${parseDate(content.startDate)}`;

  return (
    <div className='mb-4 text-text text-sm'>
      <div className='flex justify-between align-center mb-2'>
        <p>
          <span className='text-lg font-bold mr-1 align-middle'>
            {content.institution}
          </span>
          <span className='align-middle'>{content.degree}</span>
        </p>
        <p className='flex self-center text-xs text-textFaded'>
          {/* <CalendarIcon className='h-4 w-4 ml-2 mr-1' /> */}
          <span>{date}</span>
        </p>
      </div>
    </div>
  );
}
