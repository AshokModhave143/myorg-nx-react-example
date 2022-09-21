import { TodosComponent } from '@myorg-nx-react-example/todos/feature';
import React from 'react';
import './app.module.scss';
import MainPageLayout from './main-page-layout/MainPageLayout';

// eslint-disable-next-line @typescript-eslint/ban-types
export type AppProps = {};

export function App(props: AppProps) {
  return (
    <MainPageLayout>
      <TodosComponent />
    </MainPageLayout>
  );
}

export default App;
