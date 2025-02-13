import React from 'react';

export default function Section({
  title,
  children,
  hidden = false,
}: {
  title: string;
  children: React.ReactNode;
  hidden?: boolean;
}) {
  return (
    <div className={`section ${title.toLowerCase()}`}>
      {!hidden && <h2>{title}</h2>}
      {children}
    </div>
  );
}
