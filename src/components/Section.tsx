import React from 'react';

export default function Section({
  title,
  children,
  sidebar = false,
  hidden = false,
}: {
  title: string;
  children: React.ReactNode;
  sidebar?: boolean;
  hidden?: boolean;
}) {
  const classes = sidebar
    ? `section sidebar ${title.toLowerCase()}`
    : `section ${title.toLowerCase()}`;

  return (
    <div className={classes}>
      {!hidden && <h2>{title}</h2>}
      {children}
    </div>
  );
}
