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
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
