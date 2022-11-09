import React from 'react';
import { AuthProvider } from './context'
import Routes from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
