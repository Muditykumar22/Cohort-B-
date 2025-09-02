import React from 'react';
import {Routes,Route, Navigate} from 'react-router-dom';
import {useAuth} from '../src/contexts/AuthContext';
import {useTheme} from '../src/contexts/ThemeContext';
import Navigation from '../src/components/Navigation';
import Login from   '../src/components/Login';
import Home from '../src/components/Home';
import Task from '../src/components/Task';
function App(){
    const {isAuthenticated} =useAuth();
    const {isDark} = useTheme();
    if (!isAuthenticated){
        return <Login />;

    }
    return (
        <div className={`app ${isDark? 'dark' : 'light'}`}>
            <Navigate />
            <main className="main-content">
                <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/tasks" element={<Tasks />} />
                <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
        </div>
    )
}
export default App;