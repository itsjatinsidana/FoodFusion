import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';

import AdminLoginForm from './AdminLoginForm';
import AdminNavbar from './AdminNavbar';
import { AdminDashboard } from './AdminDashboard';
import { AdminManageMenu } from './AdminManageMenu';
import { UserSignup } from './UserSignup';
import { UserLogin } from './UserLogin';
import { UserHome } from './UserHome';
import { UserViewDetails } from './UsersViewDetails';
import { UserViewMenu } from './UserViewMenu';
import UserNavbar from './UserNavbar';


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/adminlogin' element={<AdminLoginForm />} />
                    <Route path='/adminnavbar' element={<AdminNavbar />} />
                    <Route path='/usernavbar' element={<UserNavbar />} />
                    <Route path='/adminnavbar' element={<AdminNavbar />} />
                    <Route path='/admindashboard' element={<AdminDashboard />} />
                    <Route path='/managemenu' element={<AdminManageMenu />} />
                    <Route path='/usersignup' element={<UserSignup />} />
                    <Route path='/userlogin' element={<UserLogin />} />
                    <Route path='/userhome' element={<UserHome />} />
                    <Route path='/usersviewdetail' element={<UserViewDetails />} />
                    <Route path='/userviewmenu' element={<UserViewMenu />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;