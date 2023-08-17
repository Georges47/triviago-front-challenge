import { useState } from 'react';

function useApiUrl() {
  const [apiUrl] = useState('http://localhost:8080/messages');
  return apiUrl;
}

export {useApiUrl}