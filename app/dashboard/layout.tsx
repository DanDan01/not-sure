import Sidenav from './../../app/dashboard/ui/sidenav';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode}) {
    return(
        <div className="flex hscreen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <Sidenav />
            </div>
        </div>
    )
}