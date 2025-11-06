import { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '@context/ThemeProvider';

import './i18n';

import { ReactQueryProvider } from '@/context';
import AppRoutes from '@/route/AppRoutes';
import ToastNotification from '@/shared/ToastNotification';

function App() {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <BrowserRouter>
          <ToastNotification />
          <Suspense fallback={<>LOader...</>}>
            <AppRoutes />
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}

export default App;
