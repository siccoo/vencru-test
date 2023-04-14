import { FC, ReactNode } from 'react';
import './App.css';
import { DashboardLayout } from './components/dashboardLayout/DashboardLayout';
import { SettingsTab } from './components/settingsTab/SettingsTab';

interface DashboardLayoutProps {
  children: ReactNode;
}

const App: FC<DashboardLayoutProps> = (props) => {
  return (
    <main>
      <DashboardLayout>{props.children}</DashboardLayout>
      <div>
        <SettingsTab
          pageTitle={"Settings"}
          pageSubTitle={"Manage your team and preferences here."} />
      </div>
    </main>
  );
}

export default App;
