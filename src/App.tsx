import { FC } from 'react';
import './App.css';
import { DashboardLayout } from './components/dashboardLayout/DashboardLayout';


const App: FC = () => {
  return (
    <main>
      <DashboardLayout children={undefined} />
    </main>
  );
}

export default App;
