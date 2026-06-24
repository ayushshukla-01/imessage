import './App.css';
import { WallpaperProvider } from './context/WallpaperContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navigate, Route, Routes } from 'react-router';
import ChatPage from './pages/ChatPage';
import AuthPage from './pages/AuthPage';
import { useAuth } from '@clerk/react';

function App() {
  return (
    <ThemeProvider>
     <wallpaperProvider>
       <Routes>
         <Route path="/" element={<ChatPage />} />
         <Route path="/auth" element={<AuthPage />} />
       </Routes>
      </wallpaperProvider>
    </ThemeProvider>
  );
}

export default App
