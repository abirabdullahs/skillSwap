import React, { useEffect, useState } from 'react';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import { Outlet } from 'react-router';
import { useAuth } from '../hooks/useAuth';

const Root = () => {

    const {user} = useAuth();
    const [editUser, setEditUser] = useState(() => user || {});

    useEffect(() => {
        setEditUser(user || {});
    }, [user]);
    
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8'>
                <Outlet
                context={{editUser, setEditUser}}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Root;