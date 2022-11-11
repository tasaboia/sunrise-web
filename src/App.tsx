import React from 'react';
import Routes from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context';

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <Routes/>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
