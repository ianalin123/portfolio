// Environment configuration for both local development and Vercel deployment

export const config = {
  // API base URL - automatically detects environment
  apiUrl: import.meta.env.MODE === 'development' 
    ? 'http://localhost:5000' 
    : '', // Empty string uses relative paths in production (Vercel)
  
  // Whether we're in development mode
  isDevelopment: import.meta.env.MODE === 'development',
  
  // Whether we're in production
  isProduction: import.meta.env.PROD,
  
  // Get full API URL for a given endpoint
  getApiUrl: (endpoint: string): string => {
    const baseUrl = config.apiUrl;
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    return baseUrl + cleanEndpoint;
  }
};

export default config;