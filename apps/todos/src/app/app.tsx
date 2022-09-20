import { TodosComponent } from '@myorg-nx-react-example/todos/feature';
import React from 'react';
import './app.module.scss';
import MainPageLayout from './main-page-layout/MainPageLayout';

export interface AppProps {
  toggleTheme?: () => void;
}

export function App({ toggleTheme }: AppProps) {
  return (
    <MainPageLayout toggleTheme={toggleTheme}>
      <TodosComponent />
    </MainPageLayout>
  );
}

export default App;
