import React from 'react';
import './Layout.css';

export default function Layout({
  header,
  children,
  footer,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div>
      {header}
      {footer}
      <table>
        <thead>
          <tr>
            <td>
              <div className='header-placeholder' />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='body'>{children}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <div className='footer-placeholder' />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
