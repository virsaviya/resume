import React from 'react';

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => string | React.ReactNode;
};

// @TODO if only one item in list, don't bullet point it
export default function List<T>({
  items,
  renderItem,
}: ListProps<T>): React.ReactElement {
  return (
    <ul className='list-disc list-outside pl-6'>
      {items.map((item, index) => (
        <li className='mb-1' key={index}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
