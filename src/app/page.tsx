import React from 'react';
import { redirect } from 'next/navigation';

const Root: React.FC = () => {
  redirect('/app');
};

export default Root;
