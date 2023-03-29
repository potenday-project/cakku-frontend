import React from 'react';
import AppRouter from 'routes';
import DefaultLayout from 'layouts/DefaultLayout';

function App() {
  return (
    <DefaultLayout>
      <AppRouter />
    </DefaultLayout>
  );
}

export default App;
