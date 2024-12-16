import React from 'react';

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className='section'>
      <h2>
        <span className=''>{title}</span>
        <span className='flex-1 border-t border-gray-200 ms-6'></span>
      </h2>
      {children}
    </div>
  );
}
