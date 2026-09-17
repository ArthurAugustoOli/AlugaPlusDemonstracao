import React from 'react';

// Fields are trusted application markup; values must be escaped by the caller.
export default function Form({ content, className = 'form', payment = false }) {
  return <form className={className} data-demo-submit="" data-payment-form={payment ? '' : undefined} dangerouslySetInnerHTML={{ __html: content }} />;
}
