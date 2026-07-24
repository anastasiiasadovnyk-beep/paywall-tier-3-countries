import type { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from '@universe-forma/ui-pes';

import PaywallPage from '@/pages/paywall';

const App: FC = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Routes>
      <Route path="/" element={<PaywallPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <Toaster />
  </BrowserRouter>
);

export default App;
