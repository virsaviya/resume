import React from 'react';

export default function Section({
  title,
  children,
  sidebar = false,
}: {
  title: string;
  children: React.ReactNode;
  sidebar?: boolean;
}) {
  const classes = sidebar
    ? `section sidebar ${title.toLowerCase()}`
    : `section ${title.toLowerCase()}`;
  return (
    <div className={classes}>
      <h2>
        <span className=''>{title}</span>
        <span className='flex-1 border-t border-gray-200 ms-6'></span>
      </h2>
      {children}
    </div>
  );
}
